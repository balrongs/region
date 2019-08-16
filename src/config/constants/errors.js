const GENERAL = {
  BAD_REQUEST: {
    CODE: 'invalid_request',
    MESSAGE: 'the request could not be understood by the server due to malformed syntax.',
  },
  UNAUTHORIZED: {
    CODE: 'unauthorized',
    MESSAGE: 'you need a valid authorization to access this resource.',
  },
  FORBIDDEN: {
    CODE: 'forbidden',
    MESSAGE: 'you do not have permission to access this resource.',
  },
  NOT_FOUND: {
    CODE: 'not_found',
    MESSAGE: 'resource not found.',
  },
  METHOD_NOT_ALLOWED: {
    CODE: 'method_not_allowed',
    MESSAGE: 'the method \'$(method)\' is not supported by this resource.',
  },
  NOT_ACCEPTABLE: {
    CODE: 'not_acceptable',
    MESSAGE: 'could not find acceptable representation.',
  },
  INTERNAL_ERROR: {
    CODE: 'internal_error',
    MESSAGE: 'ups, something went wrong. Please try later ...',
  },
  SERVICE_UNAVAILABLE: {
    code: 'service_unavailable',
    MESSAGE: 'the service is currently down for maintenance. Please try later ...',
  },
};

const VALIDATIONS = {
  UNKNOW_GRANT_TYPE: {
    CODE: 'invalid_request',
    MESSAGE: 'unknow grant type.',
  },
  UNSUPPORTED_GRANT_TYPE: {
    CODE: 'unsupported_grant_type',
    MESSAGE: 'grant type not supported.',
  },
};

export default { GENERAL, VALIDATIONS };
