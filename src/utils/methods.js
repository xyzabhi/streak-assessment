function generateRandomData(numPoints) {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({
      x: i,
      y: Math.floor(Math.random() * 100),
    });
  }
  return data;
}

function generatePieChartData(numPoints) {
  const data = {};
  for (let i = 0; i < numPoints; i++) {
    data.label = "Category" + i;
    data.value = Math.floor(Math.random() * 100);
  }
  return data;
}

export { generateRandomData,generatePieChartData };
