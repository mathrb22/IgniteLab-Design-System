import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
	children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
	<div
		className={clsx(
			'flex items-center gap-3 py-4 px-3 bg-gray-800 rounded focus:ring-2 focus:ring-cyan-300 outline-none'
		)}>
		{props.children}
	</div>;
}

// function TextInputIcon() {}

export interface TextInputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'
			{...props}
		/>
	);
}

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
};
