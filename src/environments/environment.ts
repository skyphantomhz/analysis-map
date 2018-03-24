// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDTxh74YroXZzv65e5QKSilyxV_5mHzo6Qc",
    authDomain: "eventomorrow-dev-deploy.firebaseio.com",
    databaseURL: "https://eventomorrow-dev-deploy.firebaseio.com/",
    projectId: "eventomorrow-dev-deploy",
    storageBucket: "eventomorrow-dev-deploy.appspot.com",
    messagingSenderId: "613915763145"
  },
  
  googleMapsKey: "AIzaSyCoH8CWRcdupbhcdECOTLvFlF-SeJ3qM54"
};
