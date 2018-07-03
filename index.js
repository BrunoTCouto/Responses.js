"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (req, res, next) {

    //=========== 10X ===========
    res.continue = function (data) {
        res.status(100).send((0, _extends3.default)({
            err: false,
            msg: "Continue"
        }, data));
    };
    res.processing = function (data) {
        res.status(102).send((0, _extends3.default)({
            err: false,
            msg: "Processing"
        }, data));
    };
    //=========== 10X ===========

    //=========== 20X ===========
    res.ok = function (data) {
        res.status(200).send((0, _extends3.default)({
            err: false,
            msg: "OK"
        }, data));
    };
    res.created = function (data) {
        res.status(201).send((0, _extends3.default)({
            err: false,
            msg: "The request has been fulfilled, and a new resource is created"
        }, data));
    };
    res.accepted = function (data) {
        res.status(202).send((0, _extends3.default)({
            err: false,
            msg: "Accepted"
        }, data));
    };
    //=========== 20X ===========

    //=========== 40X ===========
    res.badRequest = function (dat) {
        res.status(400).send((0, _extends3.default)({
            err: true,
            msg: "The request cannot be fulfilled due to bad syntax"
        }, data));
    };
    res.unauthorized = function (data) {
        res.status(401).send((0, _extends3.default)({
            err: true,
            msg: "Unauthorized"
        }, data));
    };
    res.forbidden = function (data) {
        res.status(403).send((0, _extends3.default)({
            err: true,
            msg: "Forbidden"
        }, data));
    };
    res.notFound = function (data) {
        res.status(404).send((0, _extends3.default)({
            err: true,
            msg: "Not Found"
        }, data));
    };
    res.notAcceptable = function (data) {
        res.status(406).send((0, _extends3.default)({
            err: true,
            msg: "Not Acceptable"
        }, data));
    };
    res.conflict = function (data) {
        res.status(409).send((0, _extends3.default)({
            err: true,
            msg: "Conflict"
        }, data));
    };
    //=========== 40X ===========

    //=========== 50X ===========    
    res.serverError = function (data) {
        res.status(500).send((0, _extends3.default)({
            err: true,
            msg: "Internal server error"
        }, data));
    };
    //=========== 50X ===========    

    next();
};