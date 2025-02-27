// Mock de dados para a aplicação de gestão de frotas
// Definição dos tipos para os dados
export interface Caminhao {
    caminhao: string;
    modelo: string;
    ano: string;
    descricao: string;
  }
  
  export interface Motorista {
    cpf: string;
    nome: string;
    dataNascimento: string;
    cidadeUF: string;
    analista: string;
  }
  
  export interface EventoCaminhao {
    caminhao: string;
    tipoEvento: string;
    dataInicio: string;
    dataFim: string;
    local: string;
  }
  
  export interface FolgaFerias {
    motorista: string;
    tipoAfastamento: string;
    dataInicio: string;
    dataFim: string;
    local: string;
    analista: string;
  }

  export interface Afastamento {
    motorista: string;
    tipoAfastamento: string;
    dataInicio: string;
    dataFim: string;
    local: string;
    analista: string;
}

export interface Viagem {
    caminhao: string;
    motorista: string;
    dataInicio: string;
    dataFim: string;
    origem: string;
    destino: string;
    analista: string;
}

export interface Ocorrencia {
    dataHora: string;
    motorista: string;
    caminhao: string;
    label: string;
    descricao: string;
    analista: string;
    local: string;
}

export interface Atualizacao {
    motorista: string;
    caminhao: string;
    dataHora: string;
    local: string;
    analista: string;
}
  
  export const caminhoes: Caminhao[] = [
    { caminhao: "ABC-1234", modelo: "Volvo FH", ano: "2010", descricao: "Caminhão pesado para transporte de longa distância" },
    { caminhao: "XYZ-5678", modelo: "Mercedes-Benz Actros", ano: "2015", descricao: "Caminhão com alta capacidade de carga e eficiência" },
    { caminhao: "LMN-4567", modelo: "Scania R450", ano: "2018", descricao: "Modelo avançado com baixo consumo de combustível" },
    { caminhao: "PQR-8910", modelo: "Iveco Stralis", ano: "2012", descricao: "Caminhão confiável para transporte regional" },
    { caminhao: "STU-1122", modelo: "MAN TGX", ano: "2020", descricao: "Caminhão moderno com excelente conforto para o motorista" },
    { caminhao: "VWX-3344", modelo: "DAF XF", ano: "2016", descricao: "Caminhão eficiente para operações logísticas" },
    { caminhao: "YZA-5566", modelo: "Renault Magnum", ano: "2008", descricao: "Caminhão robusto para transporte pesado" },
    { caminhao: "BCD-7788", modelo: "Ford Cargo", ano: "2014", descricao: "Caminhão versátil para múltiplas aplicações" },
    { caminhao: "EFG-9900", modelo: "International ProStar", ano: "2017", descricao: "Caminhão aerodinâmico com excelente desempenho" },
    { caminhao: "HIJ-3344", modelo: "Kenworth T680", ano: "2019", descricao: "Caminhão premium com tecnologia avançada" }
  ];

  export const motoristas: Motorista[] = [
    { cpf: "12345678900", nome: "Maria Joana", dataNascimento: "1985-03-10", cidadeUF: "Trindade-GO", analista: "Kevin Rocha" },
    { cpf: "98765432100", nome: "Felipe Souza", dataNascimento: "1990-06-25", cidadeUF: "Posse-GO", analista: "Paulo Júnior" },
    { cpf: "45612378901", nome: "João Silva", dataNascimento: "1982-08-12", cidadeUF: "Goiânia-GO", analista: "Kevin Rocha" },
    { cpf: "78945612302", nome: "Ana Clara", dataNascimento: "1995-04-20", cidadeUF: "Goiatuba-GO", analista: "Kevin Rocha" },
    { cpf: "32165498703", nome: "Pedro Henrique", dataNascimento: "1988-12-15", cidadeUF: "Luziânia-GO", analista: "Kevin Rocha" },
    { cpf: "65478932104", nome: "Larissa Lima", dataNascimento: "1993-09-08", cidadeUF: "Caldas Novas-GO", analista: "Kevin Rocha" },
    { cpf: "98732165405", nome: "Rafael Oliveira", dataNascimento: "1986-11-25", cidadeUF: "Mineiros-GO", analista: "Fernanda Alves" },
    { cpf: "65412378906", nome: "Camila Santos", dataNascimento: "1991-02-19", cidadeUF: "Santa Helena-GO", analista: "Fernanda Alves" },
    { cpf: "12398745607", nome: "Lucas Almeida", dataNascimento: "1984-07-01", cidadeUF: "Posse-GO", analista: "Fernanda Alves" },
    { cpf: "98765412308", nome: "Sofia Costa", dataNascimento: "1997-05-13", cidadeUF: "Porangatu-GO", analista: "Fernanda Alves" }
  ];

  export const eventosCaminhoes: EventoCaminhao[] = [
    { caminhao: "ABC-1234", tipoEvento: "Manutenção Preventiva", dataInicio: "2024-09-05", dataFim: "2024-09-06", local: "Goiânia-GO" },
    { caminhao: "XYZ-5678", tipoEvento: "Troca de Pneus", dataInicio: "2024-09-10", dataFim: "2024-09-11", local: "Anápolis-GO" },
    { caminhao: "LMN-4567", tipoEvento: "Revisão Geral", dataInicio: "2024-09-15", dataFim: "2024-09-17", local: "Rio Verde-GO" },
    { caminhao: "PQR-8910", tipoEvento: "Troca de Óleo", dataInicio: "2024-09-18", dataFim: "2024-09-19", local: "Caldas Novas-GO" },
    { caminhao: "STU-1122", tipoEvento: "Inspeção de Freios",    dataInicio: "2024-09-20", dataFim: "2024-09-21", local: "Palmas-TO" },
    { caminhao: "VWX-3344", tipoEvento: "Manutenção Elétrica",   dataInicio: "2024-09-25", dataFim: "2024-09-26", local: "Catalão-GO" },
    { caminhao: "YZA-5566", tipoEvento: "Troca de Bateria",      dataInicio: "2024-09-28", dataFim: "2024-09-29", local: "Porangatu-GO" },
    { caminhao: "BCD-7788", tipoEvento: "Revisão de Suspensão",  dataInicio: "2024-09-07", dataFim: "2024-09-08", local: "Luziânia-GO" },
    { caminhao: "EFG-9900", tipoEvento: "Inspeção Técnica",      dataInicio: "2024-09-12", dataFim: "2024-09-13", local: "Jataí-GO" },
    { caminhao: "HIJ-3344", tipoEvento: "Manutenção no Motor",   dataInicio: "2024-09-16", dataFim: "2024-09-18", local: "Barreiras-BA" }
  ];

  export const folgasFerias: FolgaFerias[] = [
    { motorista: "Maria Joana",     tipoAfastamento: "Folga", dataInicio: "2024-09-11T00:00-03:00", dataFim: "2024-09-13T00:00-03:00", local: "Trindade-GO",     analista: "Kevin Rocha" },
    { motorista: "Maria Joana",     tipoAfastamento: "Folga", dataInicio: "2024-09-25T00:00-03:00", dataFim: "2024-09-27T00:00-03:00", local: "Trindade-GO",     analista: "Kevin Rocha" },
    { motorista: "Felipe Souza",    tipoAfastamento: "Folga", dataInicio: "2024-09-18T00:00-03:00", dataFim: "2024-09-20T00:00-03:00", local: "Posse-GO",        analista: "Paulo Júnior" },
    { motorista: "João Silva",      tipoAfastamento: "Folga", dataInicio: "2024-09-11T00:00-03:00", dataFim: "2024-09-13T00:00-03:00", local: "Goiânia-GO",      analista: "Kevin Rocha" },
    { motorista: "Ana Clara",       tipoAfastamento: "Folga", dataInicio: "2024-09-12T00:00-03:00", dataFim: "2024-09-14T00:00-03:00", local: "Goiatuba-GO",     analista: "Paulo Júnior" },
    { motorista: "Pedro Henrique",  tipoAfastamento: "Folga", dataInicio: "2024-09-20T00:00-03:00", dataFim: "2024-09-22T00:00-03:00", local: "Luziânia-GO",     analista: "Paulo Júnior" },
    { motorista: "Larissa Lima",    tipoAfastamento: "Folga", dataInicio: "2024-09-14T00:00-03:00", dataFim: "2024-09-16T00:00-03:00", local: "Caldas Novas-GO", analista: "Paulo Júnior" },
    { motorista: "Rafael Oliveira", tipoAfastamento: "Folga", dataInicio: "2024-09-13T00:00-03:00", dataFim: "2024-09-15T00:00-03:00", local: "Mineiros-GO",     analista: "Fernanda Alves" },
    { motorista: "Camila Santos",   tipoAfastamento: "Folga", dataInicio: "2024-09-17T00:00-03:00", dataFim: "2024-09-19T00:00-03:00", local: "Santa Helena-GO", analista: "Fernanda Alves" },
    { motorista: "Lucas Almeida",   tipoAfastamento: "Folga", dataInicio: "2024-09-27T00:00-03:00", dataFim: "2024-09-29T00:00-03:00", local: "Posse-GO",        analista: "Fernanda Alves" },
    { motorista: "Sofia Costa",     tipoAfastamento: "Folga", dataInicio: "2024-09-09T00:00-03:00", dataFim: "2024-09-11T00:00-03:00", local: "Porangatu-GO",    analista: "Fernanda Alves" },
    { motorista: "Maria Joana",     tipoAfastamento: "Folga", dataInicio: "2024-10-11T00:00-03:00", dataFim: "2024-10-13T00:00-03:00", local: "Trindade-GO",     analista: "Kevin Rocha" },
    { motorista: "Maria Joana",     tipoAfastamento: "Folga", dataInicio: "2024-10-25T00:00-03:00", dataFim: "2024-10-27T00:00-03:00", local: "Trindade-GO",     analista: "Kevin Rocha" },
    { motorista: "Felipe Souza",    tipoAfastamento: "Folga", dataInicio: "2024-10-18T00:00-03:00", dataFim: "2024-10-20T00:00-03:00", local: "Posse-GO",        analista: "Paulo Júnior" },
    { motorista: "João Silva",      tipoAfastamento: "Folga", dataInicio: "2024-10-11T00:00-03:00", dataFim: "2024-10-13T00:00-03:00", local: "Goiânia-GO",      analista: "Kevin Rocha" },
    { motorista: "Ana Clara",       tipoAfastamento: "Folga", dataInicio: "2024-10-12T00:00-03:00", dataFim: "2024-10-14T00:00-03:00", local: "Goiatuba-GO",     analista: "Paulo Júnior" },
    { motorista: "Pedro Henrique",  tipoAfastamento: "Folga", dataInicio: "2024-10-20T00:00-03:00", dataFim: "2024-10-22T00:00-03:00", local: "Luziânia-GO",     analista: "Paulo Júnior" },
    { motorista: "Larissa Lima",    tipoAfastamento: "Folga", dataInicio: "2024-10-14T00:00-03:00", dataFim: "2024-10-16T00:00-03:00", local: "Caldas Novas-GO", analista: "Paulo Júnior" },
    { motorista: "Rafael Oliveira", tipoAfastamento: "Folga", dataInicio: "2024-10-13T00:00-03:00", dataFim: "2024-10-15T00:00-03:00", local: "Mineiros-GO",     analista: "Fernanda Alves" },
    { motorista: "Camila Santos",   tipoAfastamento: "Folga", dataInicio: "2024-10-17T00:00-03:00", dataFim: "2024-10-19T00:00-03:00", local: "Santa Helena-GO", analista: "Fernanda Alves" },
    { motorista: "Lucas Almeida",   tipoAfastamento: "Folga", dataInicio: "2024-10-27T00:00-03:00", dataFim: "2024-10-29T00:00-03:00", local: "Posse-GO",        analista: "Fernanda Alves" },
    { motorista: "Sofia Costa",     tipoAfastamento: "Folga", dataInicio: "2024-10-09T00:00-03:00", dataFim: "2024-10-11T00:00-03:00", local: "Porangatu-GO",    analista: "Fernanda Alves" }
  ];
  
  export const afastamentos: Afastamento[] = [
    { motorista: "Maria Joana",     tipoAfastamento: "ASO", dataInicio: "2024-09-10T00:00-03:00", dataFim: "2024-09-11T00:00-03:00", local: "Senador Canedo-GO",   analista: "Kevin Rocha" },
    { motorista: "Felipe Souza",    tipoAfastamento: "ASO", dataInicio: "2024-09-26T00:00-03:00", dataFim: "2024-09-27T00:00-03:00", local: "Goiânia-GO",          analista: "Paulo Júnior" },
    { motorista: "João Silva",      tipoAfastamento: "ASO", dataInicio: "2024-09-10T00:00-03:00", dataFim: "2024-09-11T00:00-03:00", local: "Aparecida de Goiânia-GO", analista: "Kevin Rocha" },
    { motorista: "Ana Clara",       tipoAfastamento: "ASO", dataInicio: "2024-09-16T00:00-03:00", dataFim: "2024-09-17T00:00-03:00", local: "Catalão-GO",          analista: "Paulo Júnior" },
    { motorista: "Pedro Henrique",  tipoAfastamento: "ASO", dataInicio: "2024-09-09T00:00-03:00", dataFim: "2024-09-10T00:00-03:00", local: "Palmas-TO",           analista: "Paulo Júnior" },
    { motorista: "Larissa Lima",    tipoAfastamento: "ASO", dataInicio: "2024-09-13T00:00-03:00", dataFim: "2024-09-14T00:00-03:00", local: "Jataí-GO",            analista: "Paulo Júnior" },
    { motorista: "Rafael Oliveira", tipoAfastamento: "ASO", dataInicio: "2024-09-12T00:00-03:00", dataFim: "2024-09-13T00:00-03:00", local: "Anápolis-GO",         analista: "Fernanda Alves" },
    { motorista: "Camila Santos",   tipoAfastamento: "ASO", dataInicio: "2024-09-16T00:00-03:00", dataFim: "2024-09-17T00:00-03:00", local: "Barreiras-BA",        analista: "Fernanda Alves" },
    { motorista: "Lucas Almeida",   tipoAfastamento: "ASO", dataInicio: "2024-09-22T00:00-03:00", dataFim: "2024-09-23T00:00-03:00", local: "Montes Claros-MG",    analista: "Fernanda Alves" },
    { motorista: "Sofia Costa",     tipoAfastamento: "ASO", dataInicio: "2024-09-07T00:00-03:00", dataFim: "2024-09-08T00:00-03:00", local: "Goiânia-GO",          analista: "Fernanda Alves" }
  ];
  
  export const viagens: Viagem[] = [
    { caminhao: "ABC-1234", motorista: "Maria Joana",     dataInicio: "2024-09-14T00:00-03:00", dataFim: "2024-09-22T00:00-03:00", origem: "Rio Verde-GO", destino: "Gurupi-TO", analista: "Kevin Rocha" },
    { caminhao: "XYZ-5678", motorista: "Felipe Souza",    dataInicio: "2024-09-06T00:00-03:00", dataFim: "2024-09-15T00:00-03:00", origem: "Anápolis-GO",  destino: "Catalão-GO", analista: "Paulo Júnior" },
    { caminhao: "LMN-4567", motorista: "João Silva",      dataInicio: "2024-09-03T00:00-03:00", dataFim: "2024-09-07T00:00-03:00", origem: "Itumbiara-GO", destino: "Araguaína-TO", analista: "Kevin Rocha" },
    { caminhao: "LMN-4567", motorista: "João Silva",      dataInicio: "2024-09-18T00:00-03:00", dataFim: "2024-09-23T00:00-03:00", origem: "Palmas-TO",    destino: "Barreiras-BA", analista: "Kevin Rocha" },
    { caminhao: "PQR-8910", motorista: "Ana Clara",       dataInicio: "2024-09-05T00:00-03:00", dataFim: "2024-09-10T00:00-03:00", origem: "Imperatriz-MA", destino: "São Luís-MA", analista: "Paulo Júnior" },
    { caminhao: "PQR-8910", motorista: "Ana Clara",       dataInicio: "2024-09-17T00:00-03:00", dataFim: "2024-09-21T00:00-03:00", origem: "São Luís-MA",  destino: "Balsas-MA", analista: "Paulo Júnior" },
    { caminhao: "STU-1122", motorista: "Pedro Henrique",  dataInicio: "2024-09-04T00:00-03:00", dataFim: "2024-09-08T00:00-03:00", origem: "Montes Claros-MG", destino: "Paracatu-MG", analista: "Paulo Júnior" },
    { caminhao: "STU-1122", motorista: "Pedro Henrique",  dataInicio: "2024-09-12T00:00-03:00", dataFim: "2024-09-16T00:00-03:00", origem: "Goiânia-GO",   destino: "Uberlândia-MG", analista: "Paulo Júnior" },
    { caminhao: "VWX-3344", motorista: "Larissa Lima",    dataInicio: "2024-09-07T00:00-03:00", dataFim: "2024-09-12T00:00-03:00", origem: "Jataí-GO",     destino: "Campo Grande-MS", analista: "Paulo Júnior" },
    { caminhao: "VWX-3344", motorista: "Larissa Lima",    dataInicio: "2024-09-19T00:00-03:00", dataFim: "2024-09-24T00:00-03:00", origem: "Caldas Novas-GO", destino: "Rondonópolis-MT", analista: "Paulo Júnior" },
    { caminhao: "YZA-5566", motorista: "Rafael Oliveira", dataInicio: "2024-09-02T00:00-03:00", dataFim: "2024-09-06T00:00-03:00", origem: "Luziânia-GO",  destino: "Brasília-DF", analista: "Fernanda Alves" },
    { caminhao: "YZA-5566", motorista: "Rafael Oliveira", dataInicio: "2024-09-16T00:00-03:00", dataFim: "2024-09-20T00:00-03:00", origem: "Araguaína-TO", destino: "Gurupi-TO", analista: "Fernanda Alves" },
    { caminhao: "BCD-7788", motorista: "Camila Santos",   dataInicio: "2024-09-10T00:00-03:00", dataFim: "2024-09-14T00:00-03:00", origem: "Aparecida de Goiânia-GO", destino: "Formosa-GO", analista: "Fernanda Alves" },
    { caminhao: "BCD-7788", motorista: "Camila Santos",   dataInicio: "2024-09-20T00:00-03:00", dataFim: "2024-09-25T00:00-03:00", origem: "Porangatu-GO", destino: "Barreiras-BA", analista: "Fernanda Alves" },
    { caminhao: "EFG-9900", motorista: "Lucas Almeida",   dataInicio: "2024-09-11T00:00-03:00", dataFim: "2024-09-15T00:00-03:00", origem: "Ceres-GO",     destino: "Uruaçu-GO", analista: "Fernanda Alves" },
    { caminhao: "EFG-9900", motorista: "Lucas Almeida",   dataInicio: "2024-09-15T00:00-03:00", dataFim: "2024-09-20T00:00-03:00", origem: "Jataí-GO",     destino: "Campo Grande-MS", analista: "Fernanda Alves" },
    { caminhao: "HIJ-3344", motorista: "Sofia Costa",     dataInicio: "2024-09-11T00:00-03:00", dataFim: "2024-09-16T00:00-03:00", origem: "Goiânia-GO",   destino: "Anápolis-GO", analista: "Fernanda Alves" },
    { caminhao: "HIJ-3344", motorista: "Sofia Costa",     dataInicio: "2024-09-18T00:00-03:00", dataFim: "2024-09-23T00:00-03:00", origem: "Araguaína-TO", destino: "Palmas-TO", analista: "Fernanda Alves" }
  ];

  export const ocorrencias: Ocorrencia[] = [
    { dataHora: "2024-09-15T08:00:00-03:00", motorista: "Maria Joana",     caminhao: "ABC-1234", label: "Acidente", descricao: "Um acidente com danos materiais.", analista: "Kevin Rocha", local: "Minaçu-GO"},
    { dataHora: "2024-09-07T14:00:00-03:00", motorista: "Felipe Souza",    caminhao: "XYZ-5678", label: "Ponte Interditada", descricao: "Uma ponte interditada causou atraso de 3 horas.", analista: "Paulo Júnior", local: "Jataí-GO"},
    { dataHora: "2024-09-09T09:00:00-03:00", motorista: "Felipe Souza",    caminhao: "XYZ-5678", label: "Pneu Furado", descricao: "O caminhão teve um pneu furado durante a viagem.", analista: "Paulo Júnior", local: "Senador Canedo-GO"},
    { dataHora: "2024-09-04T08:00:00-03:00", motorista: "João Silva",      caminhao: "LMN-3456", label: "Carga Mal Acondicionada", descricao: "Parte da carga estava mal acondicionada, gerando atrasos.", analista: "Kevin Rocha", local: "Uruaçu-GO"},
    { dataHora: "2024-09-08T15:30:00-03:00", motorista: "Ana Clara",       caminhao: "PQR-6789", label: "Problema Mecânico", descricao: "O caminhão apresentou um problema mecânico, necessitando de reparo.", analista: "Paulo Júnior", local: "Araguaína-TO"},
    { dataHora: "2024-09-15T16:00:00-03:00", motorista: "Pedro Henrique",  caminhao: "STU-9012", label: "Desvio de Rota", descricao: "Desvio de rota devido a obras na estrada.", analista: "Paulo Júnior", local: "Paracatu-MG"},
    { dataHora: "2024-09-10T17:45:00-03:00", motorista: "Larissa Lima",    caminhao: "VWX-3456", label: "Atraso na Entrega", descricao: "A entrega sofreu atraso devido a tráfego intenso.", analista: "Paulo Júnior", local: "Rio Verde-GO"},
    { dataHora: "2024-09-17T14:20:00-03:00", motorista: "Rafael Oliveira", caminhao: "YZA-7890", label: "Carga Perigosa", descricao: "Problemas na documentação para transporte de carga perigosa.", analista: "Fernanda Alves", local: "Palmas-TO"},
    { dataHora: "2024-09-10T09:00:00-03:00", motorista: "Camila Santos",   caminhao: "BCD-1122", label: "Pane Elétrica", descricao: "Pane elétrica interrompeu a viagem por 4 horas.", analista: "Fernanda Alves", local: "Barreiras-BA"},
    { dataHora: "2024-09-16T16:00:00-03:00", motorista: "Lucas Almeida",   caminhao: "EFG-3344", label: "Clima Adverso", descricao: "Chuva forte e visibilidade reduzida causaram atrasos.", analista: "Fernanda Alves", local: "Montes Claros-MG"},
    { dataHora: "2024-09-13T14:30:00-03:00", motorista: "Sofia Costa",     caminhao: "HIJ-5566", label: "Erro de Planejamento", descricao: "Rotas incorretas programadas no sistema de logística.", analista: "Fernanda Alves", local: "Goiânia-GO"}
  ];

  export const statusAtualizacoes: Atualizacao[] = [
    { motorista: "Maria Joana",     caminhao: "ABC-1234", dataHora: "2024-09-19T09:00-03:00", local: "Alvorada-TO",      analista: "Kevin Rocha" },
    { motorista: "Felipe Souza",    caminhao: "XYZ-5678", dataHora: "2024-09-17T18:00-03:00", local: "Posse-GO",         analista: "Paulo Júnior" },
    { motorista: "João Silva",      caminhao: "LMN-4567", dataHora: "2024-09-18T15:30-03:00", local: "Formosa-GO",       analista: "Kevin Rocha" },
    { motorista: "Ana Clara",       caminhao: "PQR-6789", dataHora: "2024-09-19T09:00-03:00", local: "Araguaína-TO",     analista: "Paulo Júnior" },
    { motorista: "Pedro Henrique",  caminhao: "STU-9012", dataHora: "2024-09-18T17:45-03:00", local: "Barreiras-BA",     analista: "Paulo Júnior" },
    { motorista: "Larissa Lima",    caminhao: "VWX-3456", dataHora: "2024-09-19T08:00-03:00", local: "Palmas-TO",        analista: "Paulo Júnior" },
    { motorista: "Rafael Oliveira", caminhao: "YZA-7890", dataHora: "2024-09-19T08:20-03:00", local: "Gurupi-TO",        analista: "Fernanda Alves" },
    { motorista: "Camila Santos",   caminhao: "BCD-1122", dataHora: "2024-09-19T08:45-03:00", local: "Montes Claros-MG", analista: "Fernanda Alves" },
    { motorista: "Lucas Almeida",   caminhao: "EFG-9900", dataHora: "2024-09-18T16:30-03:00", local: "Rio Verde-GO",     analista: "Fernanda Alves" },
    { motorista: "Sofia Costa",     caminhao: "HIJ-5566", dataHora: "2024-09-19T09:50-03:00", local: "Goiânia-GO",       analista: "Fernanda Alves" }
  ];
  