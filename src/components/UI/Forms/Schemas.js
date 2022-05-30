import * as Yup from 'yup'

export const FeedbackSchemas = Yup.object().shape({
    full_name: Yup.string().matches(/[a-zA-Zа-яА-Я]+/,"Введите на русском языке")
        .min(3, 'Заполните полностью поле')
        .required('Обязательное поле'),
});