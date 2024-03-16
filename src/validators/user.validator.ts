import { checkSchema } from 'express-validator';
import  locales   from '../locales/index';

export const validateUserId = () => {
    return checkSchema({
        user_id : {
            in: ['params'],
            exists : {
                errorMessage: locales.__('messages.validation.attribute_is_required', {
                    attribute: 'user_id'
                })
            },
            isNumeric: {
                errorMessage: locales.__('messages.validation.attribute_is_numeric', {
                    attribute: 'user_id'
                })
            },
            toInt: true
        }
    });
};
