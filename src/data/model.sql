

CREATE TABLE DailyMetrics (
    id INT PRIMARY KEY IDENTITY,
    act FLOAT,
    bp FLOAT,
    var FLOAT,
    data DATETIME -- ou DATETIME, dependendo da granularidade desejada
);

CREATE TABLE MonthlyMetrics (
    id INT PRIMARY KEY IDENTITY,
    act FLOAT,
    bp FLOAT,
    var FLOAT,
    month INT, -- mês associado à métrica mensal
    data DATETIME,  -- ano associado à métrica mensal
);

CREATE TABLE YearlyMetrics (
    id INT PRIMARY KEY IDENTITY,
    act FLOAT,
    bp FLOAT,
    var FLOAT,
    data DATETIME -- ano associado à métrica anual
);

CREATE TABLE DataItem (
    id INT PRIMARY KEY IDENTITY,
    nome VARCHAR(255),
    dailyMetricsId INT FOREIGN KEY REFERENCES DailyMetrics(id),
    monthlyMetricsId INT FOREIGN KEY REFERENCES MonthlyMetrics(id),
    yearlyMetricsId INT FOREIGN KEY REFERENCES YearlyMetrics(id)
);

CREATE TABLE DataReport (
    id INT PRIMARY KEY IDENTITY,
    dailyItemId INT FOREIGN KEY REFERENCES DataItem(id),
    dryingId INT FOREIGN KEY REFERENCES DataItem(id),
    processingId INT FOREIGN KEY REFERENCES DataItem(id),
    mineId INT FOREIGN KEY REFERENCES DataItem(id),
    data DATETIME
);

-- Tabelas específicas para os dados mencionados
CREATE TABLE Drying (
    id INT PRIMARY KEY IDENTITY,
    name VARCHAR(255),
    dataId INT FOREIGN KEY REFERENCES MetricsDate(id)
);

CREATE TABLE Processing (
    id INT PRIMARY KEY IDENTITY,
    name VARCHAR(255),
    dataId INT FOREIGN KEY REFERENCES MetricsDate(id)
);

CREATE TABLE Mine (
    id INT PRIMARY KEY IDENTITY,
    name VARCHAR(255),
    dataId INT FOREIGN KEY REFERENCES MetricsDate(id)
);