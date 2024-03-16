import { MASTER_USER_GROUP_NAMES } from '../constants/user.constant';

export function transform(data: any) {

    return {
        name : data.name,
        email : data.email,
        master_user_group_id : data.master_user_group_id,
        group_name : MASTER_USER_GROUP_NAMES[data.master_user_group_id],
        title: data.title,
        phone_number: data.phone_number,
        last_name: data.last_name
    }
};