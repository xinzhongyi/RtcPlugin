let server = {
    url:'',
}
switch(ENVIRONMENT){
    case 'PROD':
        server.url = "https://www.lifeccp.com/"
        break ;
    case 'TEST':
        server.url = "https://test.lifeccp.com/"
        break ;
}

export { server } ;