import WorkflowService from "../lib/v-flow-service";
import { AxiosResponse } from "axios";

// Following initialization will be available for entire file...
class IndexPage extends WorkflowService { };
const indexPage = new IndexPage();

$(document).ready(function () {
    indexPage.ajaxGetAsync("<<some-url-endpoint>>").then((res: AxiosResponse) => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
    indexPage.msgService.bootboxAlert("Test Message", (r: any) => {
        console.log(r);
    });
});