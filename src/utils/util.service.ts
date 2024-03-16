
import { Response } from 'express';
import { ResponseCode } from '../configs/response-codes';

export const responseError = (res: Response, err: any, code: number ) => {
    if (typeof err === 'object' && typeof err.message !== 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, message: err });
};


export const  responseSuccess = (res: Response, data: any, code: number) => {
    let sendData = { success: true };

    if (typeof data === 'object') {
    // merge the objects
        sendData = Object.assign(data, sendData);
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json(sendData);
};

export const throwError = (err_message: any, is_log: boolean) => {
    if (is_log === true) {
        console.error(err_message);
    }

    throw new Error(err_message);
};


export const responseForbiddenError = (res: Response): Response => {
    res.statusCode = ResponseCode.FORBIDDEN;
    return res.json({ message: 'Forbidden' });
};


export const responseErrorWithData = (res: Response, err: any, code: number , data: any) => {
    if (typeof err === 'object' && typeof err.message !== 'undefined') {
        err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;

    return res.json({ success: false, message: err , data: data});
};