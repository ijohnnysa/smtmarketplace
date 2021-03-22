export function signInRequest(business_identification, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { business_identification, password },
  };
}

export function signInSuccess(token, shop) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, shop },
  };
}

export function signUpRequest(
  trade_name,
  business_identification,
  company_name,
  address,
  telephone,
  legal_representative,
  password
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      trade_name,
      business_identification,
      company_name,
      address,
      telephone,
      legal_representative,
      password,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
