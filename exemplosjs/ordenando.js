
// Função swap para trocar elementos de posição
const swap = (vetor, i, j) => {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
  };
  
  // Função shuffle para embaralhar elementos
  const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length);
      const pos2 = Math.floor(Math.random() * vetor.length);
      swap(vetor, pos1, pos2);
    }
    return vetor;
  };
  
  // Função bubble_sort para ordenar com Bubble Sort
  const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          swap(vetor, j, j + 1);
        }
      }
    }
    return vetor;
  };
  
  // Função selection_sort para ordenar com Selection Sort
  const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (vetor[j] < vetor[min_idx]) {
          min_idx = j;
        }
      }
      swap(vetor, i, min_idx);
    }
    return vetor;
  };
  
  // Função particionamento de apoio para quick_sort
  const particionamento = (vetor, low, high) => {
    const pivot = vetor[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (vetor[j] < pivot) {
        i++;
        swap(vetor, i, j);
      }
    }
    swap(vetor, i + 1, high);
    return i + 1;
  };
  
  // Função quick_sort recursiva
  const quick_sort = (vetor, low, high) => {
    if (low < high) {
      const pi = particionamento(vetor, low, high);
      quick_sort(vetor, low, pi - 1);
      quick_sort(vetor, pi + 1, high);
    }
    return vetor;
  };
  