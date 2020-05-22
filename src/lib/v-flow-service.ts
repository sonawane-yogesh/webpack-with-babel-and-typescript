import AxiosConfig from "../common/axios-config";
import MessageService from "../common/message-service";

export default class WorkflowService extends AxiosConfig {
    msgService: MessageService = null;
    constructor() {
        super();
        this.msgService = new MessageService();
    }
}

