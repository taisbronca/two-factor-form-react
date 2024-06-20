import { useEffect, useRef, useState } from "react";
import OtpInput from "./OtpInput";

type OtpType = [string, string, string, string, string];

export default function OtpForm() {
    const firstInputRef = useRef<HTMLInputElement>(null);
    const [otp, setOtp] = useState<OtpType>(['', '', '', '', '']);

    useEffect(() => {
        firstInputRef.current?.focus();
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        const nextInput = event.currentTarget.nextElementSibling as HTMLInputElement | null;

        const index = Number(name.split('-')[1]);

        if (!/^\d*$/.test(value)) {
            return;
        }

        setOtp((prevOtp) => {
            const newOtp: OtpType = [...prevOtp]
            newOtp[index] = value
            return newOtp
        });

        if (value && nextInput) {
            nextInput.focus();
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        const previousInput = event.currentTarget.previousElementSibling as HTMLInputElement | null;
        const nextInput = event.currentTarget.nextElementSibling as HTMLInputElement | null;

        if (event.key === 'Backspace' && !event.currentTarget.value && previousInput) {
            previousInput.focus();
        }

        if (event.key === 'ArrowLeft') {
            previousInput?.focus();
        }

        if (event.key === 'ArrowRight') {
            nextInput?.focus();
        }
    }

    function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
        event.preventDefault();
        const text = event.clipboardData.getData('text');
        const otpArray = text.split('').filter((el) => /^\d*$/.test(el));

        if (otpArray.length !== 5) {
            alert('Erro: código deverá possuir 5 dígitos numéricos');
            return;
        }
        setOtp(otpArray as OtpType);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert('OTP enviado com sucesso!');
    }

    return (
        <form className='mt-10' onSubmit={handleSubmit}>
            <div className='flex items-center justify-center gap-3'>
                <OtpInput
                    ref={firstInputRef}
                    value={otp[0]}
                    name="otp-0"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                />
                {otp.slice(1).map((value, index) => (
                    <OtpInput
                        key={index + 1}
                        value={value}
                        name={`otp-${index + 1}`}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                    />
                ))}
            </div>
            <button
                type="submit"
                className='block px-12 py-3 bg-blue-400 rounded-2xl text-white font-bold text-xl mx-auto mt-10'>
                Verificar OTP
            </button>
           
        </form>
    )
}