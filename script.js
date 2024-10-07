function comparePrices() {
  // 入力値の取得
  const price1 = parseFloat(document.getElementById('price1').value);
  const quantity1 = parseFloat(document.getElementById('quantity1').value);
  const price2 = parseFloat(document.getElementById('price2').value);
  const quantity2 = parseFloat(document.getElementById('quantity2').value);
  
  // 入力が不完全な場合はエラーメッセージを表示
  if (!price1 || !quantity1 || !price2 || !quantity2) {
    document.getElementById('result').textContent = '全ての項目を入力してください。';
    resetInputColors(); // 入力ボックスの色をリセット
    return;
  }

  // 各商品の単価を計算
  const unitPrice1 = price1 / quantity1;
  const unitPrice2 = price2 / quantity2;

  // 比較結果を視覚的に強調するための処理
  let resultText = ''; // 結果を初期化
  resetInputColors(); // 入力ボックスの色をリセット

  if (unitPrice1 < unitPrice2) {
    const difference = (unitPrice2 - unitPrice1).toFixed(2);
    resultText += `<span class="cheaper highlight">商品1が商品2より${difference}円お得です。</span><br>`;
    document.getElementById('price1').style.backgroundColor = '#d4edda'; // 商品1の入力ボックスを緑色に
    document.getElementById('price2').style.backgroundColor = '#f8d7da'; // 商品2の入力ボックスを赤色に
  } else if (unitPrice2 < unitPrice1) {
    const difference = (unitPrice1 - unitPrice2).toFixed(2);
    resultText += `<span class="cheaper highlight">商品2が商品1より${difference}円お得です。</span><br>`;
    document.getElementById('price2').style.backgroundColor = '#d4edda'; // 商品2の入力ボックスを緑色に
    document.getElementById('price1').style.backgroundColor = '#f8d7da'; // 商品1の入力ボックスを赤色に
  } else {
    resultText += `<span class="highlight">両方の商品は同じ単価です。</span>`;
  }

  // 結果をHTMLに反映
  document.getElementById('result').innerHTML = resultText;
}

// 入力ボックスの色をリセットする関数
function resetInputColors() {
  document.getElementById('price1').style.backgroundColor = ''; // デフォルトの色に戻す
  document.getElementById('price2').style.backgroundColor = ''; // デフォルトの色に戻す
}
