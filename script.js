const trans=$('#translation')
const translate= (text,dest,src)=>{
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '070de65839msh633de5a33bab720p1696b3jsn2fc282377119',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: text,
            target: dest,
            source: src
        })
    };

    fetch(url,options).then(res=>res.json()).then(res=>{
        let translatedText=res.data.translations[0].translatedText;
        $('#translation').val(translatedText);
    })

}

$('button').click(function(){
    const text=$('#userText').val();
    const destLang=$('#destLang').val();
    const srcLang=$('#srcLang').val();
    translate(text,destLang,srcLang);
})


let destLang=document.getElementById('destLang').options;
let srcLang=document.getElementById('srcLang').options;

const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en';
const options = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '070de65839msh633de5a33bab720p1696b3jsn2fc282377119',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

fetch(url,options)
        .then(res=>res.json())
        .then(res=>{
            const language=res.data.languages;

            language.forEach(option=>destLang.add(new Option(option.name,option.language)));
            language.forEach(option=>srcLang.add(new Option(option.name,option.language)));

        }).catch(err=>console.error(err))
