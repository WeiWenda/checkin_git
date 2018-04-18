/*
Navicat MySQL Data Transfer

Source Server         : 202.117.16.35
Source Server Version : 50716
Source Host           : 202.117.16.35:3306
Source Database       : checkin

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2018-04-18 16:26:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for check_in
-- ----------------------------
DROP TABLE IF EXISTS `check_in`;
CREATE TABLE `check_in` (
  `person_name` varchar(255) DEFAULT NULL,
  `id_num` varchar(20) DEFAULT NULL,
  `node_name` varchar(255) DEFAULT NULL,
  `sign_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_event
-- ----------------------------
DROP TABLE IF EXISTS `lab_event`;
CREATE TABLE `lab_event` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `stu_id` varchar(20) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7545 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_grade
-- ----------------------------
DROP TABLE IF EXISTS `lab_grade`;
CREATE TABLE `lab_grade` (
  `grade_id` int(11) NOT NULL AUTO_INCREMENT,
  `grade_name` varchar(255) DEFAULT NULL,
  `grade_standard` int(11) DEFAULT NULL,
  `bg_color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`grade_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_group
-- ----------------------------
DROP TABLE IF EXISTS `lab_group`;
CREATE TABLE `lab_group` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) DEFAULT NULL,
  `sign_node_name` varchar(255) DEFAULT NULL,
  `sign_node_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_project
-- ----------------------------
DROP TABLE IF EXISTS `lab_project`;
CREATE TABLE `lab_project` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `Ltype` varchar(255) DEFAULT NULL,
  `Stype` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `project_bh` varchar(255) DEFAULT NULL,
  `members` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_sign_count
-- ----------------------------
DROP TABLE IF EXISTS `lab_sign_count`;
CREATE TABLE `lab_sign_count` (
  `stu_id` varchar(20) DEFAULT NULL,
  `sign_date` datetime DEFAULT NULL,
  `sign_count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for lab_student
-- ----------------------------
DROP TABLE IF EXISTS `lab_student`;
CREATE TABLE `lab_student` (
  `stu_id` varchar(20) NOT NULL,
  `stu_name` varchar(255) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `grade_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
