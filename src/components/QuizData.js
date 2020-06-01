export const QuizData = [
  {
    id: 1,
    subject: 'equation',
    question: 'ผลคูณของรากทั้งหมดของสมการ 6^x + 6 = 2^(x+1) + 3^(x+1) มีค่าอยู่ในช่วงใดต่อไปนี้',
    answer_a: '[0,1)',
    answer_b: '[1,2)',
    answer_c: '[2, 3)',
    answer_d: '[3,4)',
    correct_answer: 'a'
  },
  {
    id: 2,
    subject: 'equation',
    question: 'ถ้า a และ b เป็นคำตอบของสมการ x^2 − 4x + 7 = 0 แล้วค่าของ (|a| + |b|i)^4 เท่ากับข้อใด',
    answer_a: '98',
    answer_b: '-98',
    answer_c: '196',
    answer_d: '-196',
    correct_answer: 'a'
  },
  {
    id: 3,
    subject: 'equation',
    question: `จงหาค่าสูงสุดของ P = 2x + y + 5 ตามเงื่อนไขข้อจำกัดต่อไปนี้
    x + 3y − 7 = 0,  3x − 2y +1 ≥ 0,  4x + y −17 ≤ 0
    x ≥ 0  y ≥ 0`,
    answer_a: '12',
    answer_b: '13',
    answer_c: '14',
    answer_d: '15',
    correct_answer: 'a'
  },
  {
    id: 4,
    subject: 'set',
    question: `กำหนดให้ A, B, C เป็นเซต ถ้า n(B) = 42, n(C) = 28, n(A∩C) = 8, n(A∩B∩C) = 3, n(A∩B∩C’) = 2, n(A∩B’∩C’) = 20 และ n(A∪B∪C) = 80 แล้ว n(A’∩B∩C) เท่ากับข้อใดต่อไปนี้`,
    answer_a: '5',
    answer_b: '7',
    answer_c: '10',
    answer_d: '13',
    correct_answer: 'a'
  },
  {
    id: 5,
    subject: 'set',
    question: `ให้ A, B และ F เป็นเซตซึ่งกำหนดดังนี้ A = [1, 2, 3, 4, 5, 6] B = {{1}, {1, 2}, {1, 2, 3}, {1, 2, 3, 4}} F = {f : B↔A | f(x)∉x ทุกเซต x∈B} จำนวนสมาชิกของ F เท่ากับข้อใดต่อไปนี้`,
    answer_a: '24',
    answer_b: '60',
    answer_c: '100',
    answer_d: '120',
    correct_answer: 'a'
  },
  {
    id: 6,
    subject: 'set',
    question: `กำหนดให้ A = {x | x^2 - 9x - 10 ≤ 0}, B = {x | 5 - 3x > 7 - 4x} และ C = {x | x เป็นจำนวนเต็ม และ x ∈ A∩B} จำนวนสมาชิกของ C เท่ากับข้อใดต่อไปนี้`,
    answer_a: '4',
    answer_b: '5',
    answer_c: '8',
    answer_d: '9',
    correct_answer: 'a'
  },
  {
    id: 7,
    subject: 'trigonometry',
    question: `รูปสามเหลี่ยม ABC มี a, b และ c เป็นความยาวของด้านตรงข้ามมุม A, B และ C ตามลำดับ ถ้า cosB = 1/4 และ (a+b+c)(a–b+c) = 30 แล้ว 3c มีค่าเท่ากับข้อใดต่อไปนี้`,
    answer_a: '12',
    answer_b: '20',
    answer_c: '20/5',
    answer_d: '40/3',
    correct_answer: 'a'
  },
  {
    id: 8,
    subject: 'trigonometry',
    question: `รูปสามเหลี่ยม ABC มีมุม B และมุม C เป็นมุมแหลม เมื่อลากเส้นจากจุด A มาตั้งฉากกับด้าน BC ที่จุด D จะได้ AD ยาวเป็นครึ่งหนึ่งของ AB และ AD ยาวเท่ากับ DC มุม A มีขนาดเท่ากับข้อใดต่อไปนี้`,
    options: ['75°', '90°', '105°', '120°'],
    answer_a: '75°',
    answer_b: '90°',
    answer_c: '105°',
    answer_d: '120°',
    correct_answer: 'a'
  },
  {
    id: 9,
    subject: 'trigonometry',
    question: `ถ้า [1/(1-sinx)]+[1/(1+sinx)] = 8 โดยที่ π < x < 3π/2 แล้ว sin x + cos 2x + tan 3x มีค่าเท่ากับข้อใดต่อไปนี้`,
    options: ['(√3 - 1)/2', '(√3 + 1)/2', '(-√3 - 1)/2', '(-√3 + 1)/2'],
    answer_a: '(√3 - 1)/2',
    answer_b: '(√3 + 1)/2',
    answer_c: '(-√3 - 1)/2',
    answer_d: '(-√3 + 1)/2',
    correct_answer: 'a'
  }
]