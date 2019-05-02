import localEnvironment from "./environments/local";
import productionEnvironment from "./environments/production";

let environment;

if (process.env.NODE_ENV === 'production') {
    environment = productionEnvironment;
}
else {
    environment = localEnvironment;
}

export default environment;
