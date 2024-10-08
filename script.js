function comparePrices() {
  // 入力値の取得
  const price1 = parseFloat(document.getElementById('price1').value);
  const quantity1 = parseFloat(document.getElementById('quantity1').value);
  const price2 = parseFloat(document.getElementById('price2').value);
  const quantity2 = parseFloat(document.getElementById('quantity2').value);
  
  // 入力が不完全な場合はエラーメッセージを表示し、色をリセット
  if (!price1 || !quantity1 || !price2 || !quantity2) {
    document.getElementById('result').textContent = '全ての項目を入力してください。';
    resetProductColors(); // 色のリセット
    return;
  }

  // 各商品の単価を計算
  const unitPrice1 = price1 / quantity1;
  const unitPrice2 = price2 / quantity2;

  // 比較結果を初期化
  let resultText = '';
  resetProductColors(); // 色のリセット

  // 比較結果を元にブロックの色を変更
  if (unitPrice1 < unitPrice2) {
    const difference = (unitPrice2 - unitPrice1).toFixed(2);
    resultText += `<span class="cheaper">商品1が商品2より${difference}円お得です。</span><br>`;
    document.getElementById('product1').classList.add('product-cheaper'); // 商品1のブロックの背景色を変更
    document.getElementById('product2').classList.add('product-expensive'); // 商品2のブロックの背景色を変更
  } else if (unitPrice2 < unitPrice1) {
    const difference = (unitPrice1 - unitPrice2).toFixed(2);
    resultText += `<span class="cheaper">商品2が商品1より${difference}円お得です。</span><br>`;
    document.getElementById('product2').classList.add('product-cheaper'); // 商品2のブロックの背景色を変更
    document.getElementById('product1').classList.add('product-expensive'); // 商品1のブロックの背景色を変更
  } else {
    resultText += `<span class="highlight">両方の商品は同じ単価です。</span>`;
  }

  // 結果をHTMLに反映
  document.getElementById('result').innerHTML = resultText;
}

// 色をリセットする関数
function resetProductColors() {
  document.getElementById('product1').classList.remove('product-cheaper', 'product-expensive'); // クラスを削除してデフォルトに戻す
  document.getElementById('product2').classList.remove('product-cheaper', 'product-expensive'); // クラスを削除してデフォルトに戻す
}
