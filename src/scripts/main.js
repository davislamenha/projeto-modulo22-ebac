AOS.init();

const dataDoEvento = new Date('Dec 12, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaOTempo = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor(
    (tempoAteOEvento % horaEmMs) / minutoEmMs,
  );
  const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

  document.getElementById(
    'contador',
  ).innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (diasAteOEvento < 0) {
    clearInterval(contaOTempo);
    document.getElementById('contador').innerHTML = `já acabou!`;
  }
}, 1000);
