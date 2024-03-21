
const host =  'http://192.168.0.104';
const port = ':8080';
const url = '/api';

const basePath: string = host + port + url;


export const environment = {
    production      : true,
    appName         : 'Project Angular',
    envName         : 'local',
    defaultLanguage : 'en',
    apiBaseUrl      : basePath,
} ;
