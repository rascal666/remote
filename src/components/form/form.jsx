import React, { useState } from 'react';
import './form.scss';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import Button from '../uiUx/button/button.jsx';
import Checkbox from '../uiUx/checkbox/checkbox.jsx';
import { sendMessage } from '../../api/telegram.js';

const Form = ({ isForm, buttonTitle, buttonWhite, showName = true, showPhone = true, subtitle, title }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    // Опции маски для телефона
    const phoneMaskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false, // false означает, что маска будет видна сразу
        placeholderChar: '_',
    };

    function escapeMarkdownV2(text) {
        return text.replace(/([_*[]()~`>#+\\-=|{}.!\])/g, '\\$1');
    }

    const onSubmit = async (data) => {
        let isFormPhone =  data.phone.replace(/[ ()-/+]/g, '');

        try {
            let telegramMessage = ``;

            if (showName === false) {
                telegramMessage = `
                        *${isForm}*  
                        *Телефон:* ${isFormPhone}`;
            } else {
                const nameValue = escapeMarkdownV2(data.name);
                telegramMessage = `
                        *${isForm}*  
                        *Имя:* ${nameValue}  
                        *Телефон:* ${isFormPhone}`;
            }

            const message = telegramMessage.trim();
            await sendMessage(message);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>

            {title ? <div className="form__title">{title}</div> : null}

            {subtitle ? <div className="form__subtitle">{subtitle}</div> : null}

            {showName && (
                <>
                    <input
                        className={`${errors.name? 'input__error' : ''}`}
                        placeholder='Имя'
                        {...register("name", {
                            required: "Введите имя",
                            minLength: {
                                value: 2,
                                message: "*Минимум 2 символа"
                            },
                            maxLength: {                                value: 30,
                                message: "*Не больше 30 символов"
                            },
                            pattern: {
                                value: /^\p{L}+(?:[ -']\p{L}+)*$/u,
                                message: "недопустимые символы",
                            }
                        })}
                    />
                    {errors.name && <p className="form__error">{errors.name.message}</p>}
                </>
            )}


            {
                showPhone && (
                    <Controller
                        control={control}
                        name="phone"
                        rules={{
                            required: "Телефон обязателен",
                            validate: (value) => {
                                return value && value.replace(/\D/g, '').length === 11 || "Неверный формат телефона";
                            }
                        }}
                        render={({ field }) => (
                            <IMaskInput
                                className={`${errors.phone? 'input__error' : ''}`}
                                {...phoneMaskOptions}
                                {...field}
                                onAccept={(value, mask) => {
                                    field.onChange(value);
                                }}
                                onBlur={field.onBlur}
                                inputRef={field.ref}
                                type="tel"
                                placeholder="Телефон"
                            />
                        )}
                    />
                )
            }
            {
                console.log(errors)
            }
            {errors.phone && <p className="form__error">{errors.phone.message}</p>}

            <Checkbox checked={isChecked} onCheckboxChange={handleCheckboxChange} />

            <Button buttonWhite={buttonWhite} disabled={!isChecked} type='submit'>{buttonTitle}</Button>
        </form>
    );
};

export default Form;

