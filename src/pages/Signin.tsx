import { Checkbox } from '@radix-ui/react-checkbox';
import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export function Signin() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(false);

	function handleSignin(event: FormEvent) {
		event.preventDefault();

		setIsUserSignedIn(true);
	}

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 py-8 px-6 xxs:px-0 overflow-auto'>
			<header className='flex flex-col items-center'>
				<Logo />

				<Heading size='lg' className='mt-4'>
					Ignite Lab
				</Heading>
				<Text size='lg' className='text-gray-400 mt-1'>
					Faça login e comece a usar!
				</Text>
			</header>

			<form
				onSubmit={handleSignin}
				className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
				{isUserSignedIn && <Text>Login realizado!</Text>}

				<label htmlFor='email' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Endereço de e-mail</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input
							id='email'
							type='email'
							required
							placeholder='Digite seu e-mail'
						/>
					</TextInput.Root>
				</label>
				<label htmlFor='password' className='flex flex-col gap-3'>
					<Text className='font-semibold'>Sua senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input
							id='password'
							type='password'
							required
							placeholder='Digite sua senha'
						/>
					</TextInput.Root>
				</label>

				<label htmlFor='remember' className='flex items-center gap-2'>
					<Checkbox id='remember' />
					<Text size='sm' className='text-gray-200'>
						Lembrar de mim por 30 dias
					</Text>
				</label>

				<Button className='mt-4' type='submit'>
					Entrar na plataforma
				</Button>
			</form>

			<footer className='flex flex-col items-center mt-8 gap-4'>
				<Text asChild size='sm'>
					<a
						href=''
						className='text-gray-400 underline hover:text-gray-200 transition-colors'>
						Esqueceu sua senha?
					</a>
				</Text>
				<Text asChild size='sm'>
					<a
						href=''
						className='text-gray-400 underline hover:text-gray-200 transition-colors'>
						Não possui conta? Crie uma agora!
					</a>
				</Text>

				<Text size='sm' className='mt-16 text-gray-400'>
					Desenvolvido por{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/mathrb22/IgniteLab-Design-System'
						className='underline'>
						@mathrb22
					</a>
				</Text>
			</footer>
		</div>
	);
}
