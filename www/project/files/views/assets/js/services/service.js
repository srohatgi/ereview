/*
 * Service settings
 */
var Salesforce_settings = {
    "client_id": "3MVG9A2kN3Bn17htsMOa.n5HQEfEDyFQtS645ph0n.HxHdpUAxp0RE5Og1IceMRPEa0exelmg4ewZpMMWcKka",
    "redirect_url": "https://appery.io/app/salesforce/apperyio-salesforce-callback",
    "login_url": "https://login.salesforce.com/services/oauth2/authorize",
    "salesforce_instance_url": "",
    "salesforce_access_token": "",
    "salesforce_api_version": "v29.0"
}

/*
 * Services
 */

var Salesforce_Report_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Report_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Solution_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Solution_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Solution_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Solution_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Solution_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Task_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Product2_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Product2_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Product2_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Profile_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Profile_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Profile_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Profile_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_RecentlyViewed_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Vote_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Vote_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Vote_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Task_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Task_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Task_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Task_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_User_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Account_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Asset_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Asset_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Asset_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Asset_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Asset_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Attachment_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Attachment_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Attachment_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Attachment_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_BusinessHours_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_BusinessHours_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_BusinessHours_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Attachment_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Campaign_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Campaign_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Campaign_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Campaign_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Case_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Case_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Case_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Campaign_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Community_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Case_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Case_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contact_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocument_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocumentLink_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var RESTService = new Appery.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var Salesforce_ContentDocument_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocument_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocumentLink_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contract_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocumentLink_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_ContentDocumentLink_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Document_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Document_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Document_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Document_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contract_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contract_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contract_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Contract_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Event_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Event_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Folder_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_FiscalYearSettings_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Event_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Document_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Event_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Event_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Holiday_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Holiday_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Holiday_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Idea_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Folder_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Folder_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Folder_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Holiday_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_IdeaComment_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_IdeaComment_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_IdeaComment_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_IdeaComment_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Idea_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Idea_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Idea_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Idea_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Note_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Note_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Lead_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Lead_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Lead_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Lead_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Lead_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_IdeaComment_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Opportunity_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Opportunity_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Opportunity_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Opportunity_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Opportunity_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Note_query_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Note_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Note_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Pricebook2_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Pricebook2_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Partner_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Period_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Partner_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Partner_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Organization_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Organization_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Product2_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Product2_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_PricebookEntry_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_PricebookEntry_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});

var Salesforce_PricebookEntry_create_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_PricebookEntry_read_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Pricebook2_update_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'patch',
    'contentType': 'application/json',

    'serviceSettings': Salesforce_settings
});

var Salesforce_Pricebook2_delete_service = new Appery.RestService({
    'url': 'https://appery.io/app/rest/tunnel',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Salesforce_settings
});