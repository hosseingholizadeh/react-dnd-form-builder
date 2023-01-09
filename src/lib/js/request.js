import axios from "axios";
import i18n from "../../lan/config";
import { Error } from "./message";
import culture from "./culture";

const baseUrl = "http://localhost:9000";

export function send({ method, url, headers, data }, success, fail, options) {
  if (!options) options = {};
  if (options.showError === undefined) options.showError = true;
  if (!options.lan) options.lan = culture.getLanguage() ?? "fa";

  let token = localStorage.getItem("token");
  if (!headers) headers = {};
  if (token) headers = { ...headers, Authorization: `Bearer ${token}` };
  if (options.lan) headers["Accept-Language"] = options.lan;
  let config = {
    method: method,
    url: `${baseUrl}/${url}`,
    headers: headers,
    data: data,
    withCredentials: true,
    validateStatus: function (status) {
      return status < 400 || status === 401; // Resolve only if the status code is less than 500
    },
    //timeout: options.timeout ?? 200 * 1000,
  };

  if (options.debug)
    console.log(`[${config.method}]${config.url} request => `, config);

  axios
    .request({ ...config })
    .then((res) => {
      if (options.debug)
        console.log(`[${config.method}]${config.url} response => `, res);

      if (res.status === 401) {
        return refreshToken(() =>
          send({ method, url, headers, data }, success, fail, options)
        );
      }
      if (
        res.status !== 200 &&
        res.status !== 201 &&
        res.status !== 202 &&
        res.status !== 203 &&
        res.status !== 204 &&
        res.detail &&
        res.detail !== ""
      ) {
        if (options.retry && options.retry >= 3000) {
          return setTimeout(
            () =>
              send({ method, url, headers, data }, success, fail, {
                ...options,
                retry: undefined,
              }),
            options.retry
          );
        }

        if (fail) fail();
        return Error(res.detail);
      }
      if (success) success(res);
    })
    .catch((error) => {
      console.error(error.response ?? error);

      if (options.retry && options.retry >= 3000) {
        return setTimeout(
          () =>
            send({ method, url, headers, data }, success, fail, {
              ...options,
              retry: undefined,
            }),
          options.retry
        );
      }

      if (options.showError === true) {
        let detail = error.response?.data?.Detail;
        if (detail) Error(detail);
        else Error(i18n.t("failed_to_connect_server"));
      }

      if (fail) fail(error);
    });
}

function refreshToken(originaleRequest) {
  post_request(
    `${baseUrl}/api/v1/im/login/refresh-token`,
    {},
    (responseData) => {
      if (responseData.status === 200 && responseData.data.accessToken) {
        localStorage.setItem("token", responseData.data.accessToken.token);

        let accountFullname = responseData.data.fullName ?? "";
        localStorage.setItem("accountFullname", accountFullname);

        document.getElementById("account-fullname").value = accountFullname;
        return setTimeout(() => originaleRequest(), 100);
      } else {
        Error(i18n.t("authenticationFailed"));

        setTimeout(() => {
          localStorage.removeItem("token");
          window.location = "/login";
        }, 2000);
      }
    },
    (error) => {
      if (error?.response?.status === 400) {
        setTimeout(() => {
          localStorage.removeItem("token");
          window.location = "/login";
        }, 2000);
      }
    },
    { showError: false }
  );
}

export function get_request(
  url,
  success,
  fail,
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  }
) {
  send({ method: "get", url }, success, fail, options);
}

export function post_request(
  url,
  data,
  success,
  fail,
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  },
  headers = {}
) {
  send({ method: "post", url, data, headers }, success, fail, options);
}

export function put_request(
  url,
  data,
  success,
  fail,
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  },
  headers = {}
) {
  send({ method: "put", url, data, headers: headers }, success, fail, options);
}

export function delete_request(
  url,
  success,
  fail,
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  }
) {
  send({ method: "delete", url }, success, fail, options);
}

export function download(
  url,
  success,
  fail,
  method = "GET",
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  }
) {
  let token = localStorage.getItem("token");
  fetch(url, {
    method: method,
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Accept-Language": options.lan,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        if (fail) fail();
        return Error(i18n.t("failed_to_connect_server"));
      }
      return response.blob();
    })
    .then((blob) => {
      try {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        document.body.appendChild(a);
        a.click();
        a.remove();
        if (success) success();
      } catch {}
    })
    .catch((error) => {
      console.error(`(${url})failed to download file. error:`, error);
      if (fail) fail();
    });
}

export function fetchWitUpload(
  url,
  formData,
  success,
  fail,
  method = "POST",
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  }
) {
  let token = localStorage.getItem("token");
  fetch(url, {
    method: method,
    headers: new Headers({
      Authorization: "Bearer " + token,
      Accept: "application/json",
      "content-type": "multipart/form-data",
      "Accept-Language": options.lan,
    }),
    body: formData,
  })
    .then((response) => {
      if (response.status !== 200) {
        if (fail) fail();
        return Error(i18n.t("failed_to_connect_server"));
      }
      if (success) success();
    })
    .catch((error) => {
      console.error(error);
      if (fail) fail();
    });
}

export async function fetchWithTimeout(url, options, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    ),
  ]);
}

export async function fecth_request(
  config,
  success,
  fail,
  options = {
    showError: true,
    debug: false,
    lan: culture.getLanguage(),
  }
) {
  let token = localStorage.getItem("token");
  const { timeout = 120000 } = options;

  var response = await fetchWithTimeout(
    config.url,
    {
      ...config,
      headers: new Headers({
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "content-type": "application/json",
        "Accept-Language": options.lan,
      }),
    },
    150000
  );

  if (response.status !== 200) {
    if (fail) fail();
    return Error(i18n.t("failed_to_connect_server"));
  }
  if (success) success();
}

export function checkCodingType(url_base, entityId, success, lan) {
  get_request(
    `${url_base}/Api/v1/im/Entity/CheckCodingManualState?entityId=${entityId}`,
    (res) => {
      if (res.status == 200 && res.data.success === true) {
        success(res.data.codeIsManual);
      } else Error(i18n.t("مشکلی در بررسی نوع کدینگ پیش آمده است"));
    },
    null,
    { lan }
  );
}
