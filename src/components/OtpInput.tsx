import { forwardRef } from "react";

type OtpInputProps = {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>((props, ref) => {
    const { value, name, onChange, onKeyDown, onPaste } = props;
    return (
        <input
            inputMode="numeric"
            autoComplete="one-time-code"
            ref={ref}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            value={value}
            name={name}
            required
            maxLength={1}
            type='text'
            className='w-10 p-2 bg-stone-200 text-stone-800 rounded-lg text-3xl text-center focus:outline-blue-400'
        />
    );
});

export default OtpInput;