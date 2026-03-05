select "Hello, World";

# Executar linha atual: CTRL + ENTER

# Operadores Aritméticos
select 1 + 2;
select 3 - 4;
select 5 * 6;
select 7 / 8;


# Precedência de operadores
select 1 + 2 * 3 / 4;
select (1 + 2) * 3 / 4;

# Exponenciação  (Power)
select power(2, 8);

# Raiz Quadrada  (Square Root)
select sqrt(121);
select sqrt(144);

# Resto da Divisão  (Módulo)
select 5 % 3;
select mod(5, 3);

select 
	1 + 1 as soma,
	2 - 2 as subtracao,
    3 * 3,
    4 / 4;

# Operadores Relacionais


select 1 = 5;  # resultado = 0 (false)
select 1 != 5; # resultado = 1 (true)
select 2 > 2;
select 2 >= 2;
select 3 < 3;
select 3 <= 3;

# Operadores Lógicos

# Tabela Verdade do Operador Lógico E (Conjunção)
select true and true;
select true and false;
select false and true;
select false and false;

# Tabela Verdade do Operador Lógico OU (Disjunção)
select true or true;
select true or false;
select false or true;
select false or false;

# Tabela Verdade de Operador Lógico NÂO (Negação)
select not true;
select not false;