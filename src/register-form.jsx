import React from "react";
import Image from "./components/ui/Image";
import Link from "./components/ui/Link";
import { User, Mail, Lock, KeyRound } from 'lucide-react';

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export default function Register() {
  return (
    <div className="grid min-h-screen gap-8 p-8 bg-gray-800 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <h1 className="mb-8 text-4xl font-bold text-white">Registrar</h1>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                Ingresa su nombre
              </div>
            </Label>
            <Input
              id="name"
              placeholder="Ingrese su nombre"
              required
              className="text-white bg-gray-700 border-gray-600 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                correo 
              </div>
            </Label>
            <Input
              id="email"
              placeholder="Ingrese su correo "
              required
              type="email"
              className="text-white bg-gray-700 border-gray-600 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-gray-400" />
                Contraseña
              </div>
            </Label>
            <Input
              id="password"
              placeholder="Ingresar contraseña"
              required
              type="password"
              className="text-white bg-gray-700 border-gray-600 placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-white">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-gray-400" />
                Repetir contraseña 
              </div>
            </Label>
            <Input
              id="confirm-password"
              placeholder="Repetir su contraseña"
              required
              type="password"
              className="text-white bg-gray-700 border-gray-600 placeholder:text-gray-400"
            />
          </div>
          
          <Button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600">
            Registar
          </Button>
        </form>
      </div>
      <div className="items-center justify-center hidden lg:flex">
        <Image
          src="https://www.itca.edu.sv/wp-content/themes/elaniin-itca/images/logoColor.png"
          alt="Sign up illustration"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

