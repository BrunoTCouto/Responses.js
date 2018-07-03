# Responses.js

>Simple Middleware to simplify responses in express with the most common status codes

Simple Middleware to simplify responses in express with the most common status codes

## Installation

OS X & Linux & Windows:

```sh
npm install responses.js --save
```

## Usage example

```js
var express = require('express')
var responses =  require('responses.js')

var app = express()

app.set('PORT', process.env.PORT || 8000)

app.get('/', responses, (req, res)=>{
    res.ok({Response:'Hello World'})
})

app.get('/serverErr', responses, (req, res)=>{
    res.serverError({Response:'Ops! Something went wrong!'})
})

app.listen(app.get('PORT'), () => {
    console.log(`Express server listening on port ${app.get('PORT')}`)
})
```
Expected response
<img src='https://user-images.githubusercontent.com/23619646/42228865-694e7ce8-7ebb-11e8-9827-7844bd09ba8b.png'>
<img src='https://user-images.githubusercontent.com/23619646/42235188-612efb84-7ecd-11e8-9768-201b89e71133.png'>

## Available Responses
- 100 - continue
- 102 - processing
- 200 - ok
- 201 - created
- 202 - accepted
- 400 - badRequest
- 401 - unauthorized
- 403 - forbidden
- 404 - notFound
- 406 - notAcceptable
- 409 - conflict
- 500 - serverError

## Release History
* 1.0.8
    * First stable release
* 1.0.0
    * First release


## Contributing

1. Fork it (<https://github.com/BrunoTCouto/Responses.js/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
Apache License 2.0
A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

Apache 2.0 © [Bruno Couto](https://github.com/BrunoTCouto)

## Thanks

Special thanks for [Gabriel Marote](https://github.com/Gamarote) for helping in the creation of this module


