
function getVideo(){
    var x = location.search;
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        console.log(param)
    }
    console.log(params.get('v'))

    return params.get('v')
}
