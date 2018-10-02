-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Hotel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Hotel` (
  `Hotel_id` INT NOT NULL AUTO_INCREMENT,
  `Staff_id` INT NULL,
  `Name` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `Phone` VARCHAR(45) NULL,
  `Email` VARCHAR(100) NULL,
  `City` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  PRIMARY KEY (`Hotel_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Staff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Staff` (
  `Staff_id` INT NOT NULL AUTO_INCREMENT,
  `First_Name` VARCHAR(45) NULL,
  `Last_Name` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  `DOB` DATE NULL,
  `Mobile` varchar(45) NULL,
  `Address` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  `Position` VARCHAR(45) NULL,
  `Hotel_id` INT NULL,
  PRIMARY KEY (`Staff_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Room` (
  `Room_id` INT NOT NULL AUTO_INCREMENT,
  `Room_Type` VARCHAR(45) NULL,
  `Room_Img` VARCHAR(200) NULL,
  `Room_Description` VARCHAR(45) NULL,
  `Price` INT NULL,
  `Hotel_id` INT NULL,
  PRIMARY KEY (`Room_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Reservation` (
  `Reservation_id` INT NOT NULL AUTO_INCREMENT,
  `Room_id` INT NULL,
  `Customer_id` INT NULL,
  `Reservation_Date` DATE NULL,
  `Check_In_Date` DATE NULL,
  `Check_Out_Date` DATE NULL,
  `No_of_Nights` INT NULL,
  PRIMARY KEY (`Reservation_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Customer` (
  `Customer_id` INT NOT NULL AUTO_INCREMENT,
  `First_Name` VARCHAR(45) NULL,
  `Last_Name` VARCHAR(45) NULL,
  `Email_Address` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  `DOB` DATE NULL,
  `Gender` VARCHAR(45) NULL,
  `Phone_No` INT NULL,
  `Address` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  `Reservation_id` INT NULL,
  PRIMARY KEY (`Customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Check_In`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Check_In` (
  `Check_in_id` INT NOT NULL AUTO_INCREMENT,
  `Room_id` INT NULL,
  `Customer_id` INT NULL,
  PRIMARY KEY (`Check_in_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Bill` (
  `Invoice_No` INT NOT NULL AUTO_INCREMENT,
  `Customer_id` INT NULL,
  `Room_id` INT NULL,
  `Check_In_id` INT NULL,
  PRIMARY KEY (`Invoice_No`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Payment` (
  `Payment_id` INT NOT NULL AUTO_INCREMENT,
  `Customer_id` INT NULL,
  `Card_Type` VARCHAR(45) NULL,
  `Full_Name` VARCHAR(45) NULL,
  `Card_No.` INT NULL,
  `Amount` INT NULL,
  `CVV` INT NULL,
  `Cash` VARCHAR(45) NULL,
  `Invoice_No` INT NULL,
  PRIMARY KEY (`Payment_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Check_out`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Check_out` (
  `Check_out_id` INT NOT NULL AUTO_INCREMENT,
  `Room_id` INT NULL,
  `Customer_id` INT NULL,
  `Payment_id` INT NULL,
  `Payment_Type` VARCHAR(45) NULL,
  PRIMARY KEY (`Check_out_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
