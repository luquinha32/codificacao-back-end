import { Controller, Get, Post, Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./dto/criar-convidado.dto.js";
import { get } from "http";
@Controller('convidados')

export class convidadosController{
    @Get()
    listarConvidados(){
       return['Amanda', 'Davi', 'Adam', 'Gabrielly', 'yuri'];
       }

       @Post()
       criar(@Body() CriarConvidadoDto: CriarConvidadoDto){
        console.log('[PORTEIRO DIGITAL]novo convidado recebido: ${criarConvidadodto.nome');
        return{
            mensagem: 'convidado $S{Criarconvidadodto.nome} adicionado com sucesso!',
            dados: CriarConvidadoDto,
        }
       
    }
}   