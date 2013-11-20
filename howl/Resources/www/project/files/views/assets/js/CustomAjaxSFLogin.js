$.ajax({
     type: 'POST',
     url:   'https://login.salesforce.com',  
     headers: {"Access-Control-Allow-Origin": "*"},
    data: { username: 'sumeet.rohatgi@hotmail.com', password: 'test123442Fx59RN27Z00NBDfdbcuOSv', grant_type: 'password', client_id: '3MVG9QDx8IX8nP5SFJKf4fpPHVMwt.HN4JWdanXhf.ipMW11xdJyeHFScCK_VCq.OSU0gPXFAl1wHazLqGIc.', client_secret: 6325945293227652987 } 
//use parameters as such defined in webservice
}).done(function( data ) { console.log(data); }); 
});

