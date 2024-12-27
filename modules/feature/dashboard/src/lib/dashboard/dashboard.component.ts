import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  title = 'Agendador de Estudos';
  cronogramas = [
    {
      nome: 'Português',
      progresso: 75,
      cor: 'primary',
    },
    {
      nome: 'Legislação EBSERH',
      progresso: 50,
      cor: 'success',
    },
    {
      nome: 'Políticas Públicas',
      progresso: 30,
      cor: 'danger',
    },
    {
      nome: 'Administração Pública',
      progresso: 30,
      cor: 'primary',
    },
    {
      nome: 'Lei de Responsabilidade Fiscal',
      progresso: 30,
      cor: 'success',
    },
    {
      nome: 'Redação',
      progresso: 30,
      cor: 'info',
    },
    {
      nome: 'Banco de Dados',
      progresso: 30,
      cor: 'warning',
    },
  ];

  cronogramas2 = [
    {
      nome: 'Engenharia de Software',
      progresso: 30,
      cor: 'danger',
    },
    {
      nome: 'Desenvolvimento de Software',
      progresso: 30,
      cor: 'primary',
    },
    {
      nome: 'Governança de TI',
      progresso: 30,
      cor: 'info',
    },
    {
      nome: 'Redes e Segurança',
      progresso: 30,
      cor: 'warning',
    },
    {
      nome: 'Sistemas Operacionais',
      progresso: 30,
      cor: 'danger',
    },
    {
      nome: 'Revisão geral',
      progresso: 30,
      cor: 'primary',
    },
    {
      nome: 'Simulado',
      progresso: 30,
      cor: 'success',
    },
  ];
}
