module.exports = (req, res, next) => {

    //=========== 10X ===========
    res.continue = (data) => {
        res.status(100)
            .send({
                err: false,
                msg: "Continue",
                ...data                
            })
    }
    res.processing = (data) => {
        res.status(102)
            .send({
                err: false,
                msg: "Processing",
                ...data                
            })
    }
    //=========== 10X ===========

    //=========== 20X ===========
    res.ok = (data) => {
        res.status(200)
            .send({
                err: false,
                msg: "OK",
                ...data
            })
    }
    res.created = (data) => {
        res.status(201)
            .send({
                err: false,
                msg: "The request has been fulfilled, and a new resource is created",
                ...data
            })
    }
    res.accepted = (data) => {
        res.status(202)
            .send({
                err: false,
                msg: "Accepted",
                ...data
            })
    }
    //=========== 20X ===========

    //=========== 40X ===========
    res.badRequest = (dat) => {
        res.status(400)
            .send({
                err: true,
                msg: "The request cannot be fulfilled due to bad syntax",
                ...data
            })
    }
    res.unauthorized = (data) => {
        res.status(401)
            .send({
                err: true,
                msg: "Unauthorized",
                ...data
            })
    }
    res.forbidden = (data) => {
        res.status(403)
            .send({
                err: true,
                msg: "Forbidden",
                ...data
            })
    }
    res.notFound = (data) => {
        res.status(404)
            .send({
                err: true,
                msg: "Not Found",
                ...data
            })
    }
    res.notAcceptable = (data) => {
        res.status(406)
            .send({
                err: true,
                msg: "Not Acceptable",
                ...data
            })
    }
    res.conflict = (data) => {
        res.status(409)
            .send({
                err: true,
                msg: "Conflict",
                ...data
            })
    }
    //=========== 40X ===========

    //=========== 50X ===========    
    res.serverError = (data) => {
        res.status(500)
            .send({
                err: true,
                msg: "Internal server error",
                ...data
            })
    }
    //=========== 50X ===========    

    next()
}