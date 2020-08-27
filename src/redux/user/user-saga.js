import { takeLatest, all, call } from "redux-saga/effects";

import { userActionTypes } from "./user-types";

import {
  auth,
  // createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";

export function* siginInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, siginInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart())]);
}
