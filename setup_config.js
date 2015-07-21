var fs = require('fs');

var default_obj = {
    username: 'email@address.com',
    password: 'S0m35741n6'
};
function checkConfig(fileName,callback)
{
    fs.exists(fileName, function (exists) {
        if(exists)
        {
            callback();
        }else
        {
            fs.writeFile(fileName,JSON.stringify(default_obj),{flag: 'wx'}, function (err, data) 
            { 
                callback();
            })
        }
    });
}

function writeConfig()
{
    checkConfig("screeps.config.json",function()
    {
       console.log('Exists');
    });
}

writeConfig();