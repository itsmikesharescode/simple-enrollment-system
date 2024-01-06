export type AdmissionType = {
    title: string
    url: string
    img: string
    intro: string
    curriculum: string
    coreCompetenies: string
    opportunities: string
    specialization: string
    experience: string
}

//student application types cuz i dont know to use prisma
export type STUDENT_APP_TB = {
    id: number
    created_at: string
    app_type: string
    fullname: string
    present_address: string
    religion: string
    mobile_number: string
    date_of_birth: string
    fathers_fullname: string
    mothers_fullname: string
    primary_school_name: string
    primary_school_address: string
    primary_school_year_grad: string
    secondary_school_name: string
    secondary_school_address: string
    secondary_school_year_grad: string
    student_uid: string
    student_email: string
    course: string
}

//interaction post types
export type INTERACTION_POST_TB = {
    id: number
    created_at: string
    post_value: string
    post_owner_email: string
}

//interaction comment types
export type INTERACTION_COMMENTS_TB = {
    id: number
    created_at: string
    post_id: number
    comment_owner_email: string
    comment_owner_id: string
    comment_value: string

}