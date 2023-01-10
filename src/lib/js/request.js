import axios from "axios";
import i18n from "../../lan/config";
import { ErrorMessage } from "./message";
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
        if (detail) ErrorMessage(detail);
        else ErrorMessage(i18n.t("failed_to_connect_server"));
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
        ErrorMessage(i18n.t("authenticationFailed"));

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
