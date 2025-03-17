const { test, expect } = require('@playwright/test');

test('Сложение двух целых положительных чисел', async ({ page }) => {
  await page.goto('file:///C:/calculator/calculator.html');
  await page.fill('#num1', '5');
  await page.fill('#num2', '3');
  await page.click('button#add');
  const result = await page.textContent('#result');
  expect(result).toBe('Результат: 8');
});

test('Деление двух целых положительных чисел', async ({ page }) => {
  await page.goto('file:///C:/calculator/calculator.html');
  await page.fill('#num1', '4');
  await page.fill('#num2', '2');
  await page.click('button#divide');
  const result = await page.textContent('#result');
  expect(result).toBe('Результат: 2');
});

test('Деление на ноль', async ({ page }) => {
  await page.goto('file:///C:/calculator/calculator.html');
  await page.fill('#num1', '4');
  await page.fill('#num2', '0');
  await page.click('button#divide');
  const result = await page.textContent('#result');
  expect(result).toBe('Результат: Деление на ноль невозможно');
});

test('Ввод нечисла', async ({ page }) => {
  await page.goto('file:///C:/calculator/calculator.html');
  await page.fill('#num1', '4');
  await page.fill('#num2', '');
  await page.click('button#add');
  const result = await page.textContent('#result');
  expect(result).toBe('Пожалуйста, введите корректно оба числа');
});