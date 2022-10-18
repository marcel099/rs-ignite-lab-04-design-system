import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

import './shared/global.css';

export function App() {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-screen h-screen bg-gray-900 
        text-gray-100
      "
    >
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Container>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Container>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Container>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Container>
        </label>

        <label htmlFor="remember-me" className="flex items-center gap-2">
          <Checkbox id="remember-me" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias   
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a
            href="#"
            className="
              text-gray-400 underline
              transition-colors hover:text-gray-200
            "
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm">
          <a
            href="#"
            className="
              text-gray-400 underline
              transition-colors hover:text-gray-200
            "
          >
            Não possui conta? Crie uma agora! 
          </a>
        </Text>
      </footer>
    </div>
  )
}
