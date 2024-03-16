export function transform(data: any) {

    return {
        name : data.name,
        email : data.email,
        master_user_group_id : data.master_user_group_id,
        title: data.title,
        phone_number: data.phone_number,
        last_name: data.last_name
    }
};