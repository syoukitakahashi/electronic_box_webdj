const audioContext = new AudioContext();

function handleFileSelect(event) {
  const audioFile = event.target.files[0];

  // ファイルの名前を取得する
  const fileName = audioFile.name;

  // ファイルのサイズを取得する
  const fileSize = audioFile.size;

  // ファイルのデータを取得する
  const fileData = await audioFile.arrayBuffer();

  // ファイルのデータを Web Audio API で読み込む
  const audioBuffer = audioContext.createBuffer(2, 44100, 'float32');
  audioBuffer.copyFrom(fileData);
  const audioBufferSourceNode = audioContext.createBufferSource();
  audioBufferSourceNode.buffer = audioBuffer;
  audioBufferSourceNode.start();
}

document.querySelector('input[type="file"]').addEventListener('change', handleFileSelect);
