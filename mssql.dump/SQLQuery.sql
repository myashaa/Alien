/*drop database alien

select * from [User]
select * from UserPhoto
select * from Post
select * from PostPhoto
select * from Tag
select * from PostHasTag
select * from Comment
select * from [Like]
select * from Subscription*/

USE alien

/* User */
INSERT INTO [User] VALUES ('chudo-prirody', 'test1@mail.ru', 'qwerty1', 1, 2, 3)
INSERT INTO [User] VALUES ('janot', 'test2@mail.ru', 'qwerty2', 1, 1, 2)
INSERT INTO [User] VALUES ('byaka-obyknovennaya', 'test3@mail.ru', 'qwerty3', 2, 0, 1)
INSERT INTO [User] VALUES ('pervokursnik', 'test4@mail.ru', 'qwerty4', 0, 5, 5)
INSERT INTO [User] VALUES ('kisya', 'test5@mail.ru', 'qwerty5', 2, 2, 7)
INSERT INTO [User] VALUES ('major', 'test6@mail.ru', 'qwerty6', 1, 1, 1)
INSERT INTO [User] VALUES ('krot', 'test7@mail.ru', 'qwerty7', 1, 0, 2)
INSERT INTO [User] VALUES ('psnik', 'test8@mail.ru', 'qwerty8', 0, 2, 1)
INSERT INTO [User] VALUES ('shutnik', 'test9@mail.ru', 'qwerty9', 0, 2, 2)
INSERT INTO [User] VALUES ('wikipedia', 'test10@mail.ru', 'qwerty10', 2, 1, 3)

/* UserPhoto */
INSERT INTO UserPhoto VALUES (1, 'https://chudo-prirody.com/uploads/posts/2021-08/1628748036_138-p-smeshnie-foto-kotov-na-avu-140.jpg')
INSERT INTO UserPhoto VALUES (2, 'https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-8.jpg')
INSERT INTO UserPhoto VALUES (3, 'https://placepic.ru/wp-content/uploads/2021/02/dog_in_glasses.jpg.pagespeed.ce_.sytM1lqqeX-768x517.jpg')
INSERT INTO UserPhoto VALUES (4, 'https://lh3.googleusercontent.com/_LxJGTDu-3zK0KJNP5y0AshOq0RK32kJGI2hVwMp6FR-GZ_UGgF2onG_a3yBR4Bx4KY=w1200-h630-p')
INSERT INTO UserPhoto VALUES (5, 'https://chudo-prirody.com/uploads/posts/2021-08/1628751864_4-p-foto-kotov-na-avu-4.jpg')
INSERT INTO UserPhoto VALUES (6, 'https://fanibani.ru/images/wp-content/uploads/2021/06/na-avy-parni-5.jpg')
INSERT INTO UserPhoto VALUES (7, 'https://krot.info/uploads/posts/2022-03/1646713903_4-krot-info-p-prikolnie-avi-smeshnie-foto-5.jpg')
INSERT INTO UserPhoto VALUES (8, 'https://lechicgeek.boardingarea.com/wp-content/uploads/2016/06/dreamstime_xl_1063827.jpg')
INSERT INTO UserPhoto VALUES (9, 'https://shutniks.com/wp-content/uploads/2020/01/smeshnye_avatarki_48_17105720.jpg')
INSERT INTO UserPhoto VALUES (10, 'https://fikiwiki.com/uploads/posts/2022-02/thumbs/1644853321_11-fikiwiki-com-p-prikolnie-kartinki-pro-rabotu-s-zhivotnimi-14.jpg')

/* Post */
INSERT INTO Post VALUES (1, '��������� ������ ������ ������ ���� � ��������. �� ��������� �� ���� �� ������� �� ������ ������ �� ���-������� ������� ���� ����������� ����� �� ���� �������.', '2023-01-01T14:25:10','��������� ������', 0, 0)
INSERT INTO Post VALUES (1, '������� ������ - ���� ������� ���������. � ��� � ������ ���� � ���������� ���� ������, � ����� ������� ���, � ����� ������� ������, ���� ������� ����� � ����� ��������� �������.', '2023-01-04T14:25:10','������� ������', 1, 0)
INSERT INTO Post VALUES (1, '�� ����� ������� ������ ������������ ���� � ��������� �������, ���������� �����������.', '2023-01-07T14:25:10','��������', 1, 1)
INSERT INTO Post VALUES (2, '����������� ����� ������ ����� �����. � ������� ����� �������� ������� ������� � �������� ������.', '2023-01-23T14:25:10','����� �����', 1, 2)
INSERT INTO Post VALUES (2, '�� ���������� ��������� ����� ���������� ����� ��� ���������� �����, ��� ����� �� ������. � ���������� ����� ����������� � ������� ���� �������������� �� 2-� ��������� ������.', '2023-01-14T14:25:10','���������� �����', 0, 0)
INSERT INTO Post VALUES (3, '������ ������� ������ ������. � � ����� ������� �����. � � ����� ������� �����. ������ - �� ���� ����� �������?', '2023-01-30T14:25:10','���������', 0, 0)
INSERT INTO Post VALUES (4, '� ����� ���������� ����?', '2023-01-11T14:25:10','����', 4, 7)
INSERT INTO Post VALUES (4, '� ���������!!!', '2023-01-19T14:25:10','���������', 0, 0)
INSERT INTO Post VALUES (4, '��� �������� ��������? ����� ����, �������� �����!', '2023-01-23T14:25:10','���������', 3, 0)
INSERT INTO Post VALUES (4, '��� ����� ��� ���� ������?', '2023-01-23T14:25:10','������', 1, 1)
INSERT INTO Post VALUES (4, '����, ����� �� ����.', '2023-01-24T14:25:10','���', 4, 1)
INSERT INTO Post VALUES (5, NULL, '2023-01-06T14:25:10','�����������', 0, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-13T14:25:10','���������', 0, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-01T14:25:10','����', 1, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-31T14:25:10','����������', 0, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-23T14:25:10','��������������', 1, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-24T14:25:10','�����������', 0, 0)
INSERT INTO Post VALUES (5, NULL, '2023-01-17T14:25:10','��������', 2, 0)
INSERT INTO Post VALUES (6, '� ����������� ����� ������ ���������� �����.', '2023-01-23T14:25:10','������', 0, 0)
INSERT INTO Post VALUES (7, '���� � ����� ������ ��������� ���� ��� �� ����� ���� ���� ����������� ����.', '2023-01-12T14:25:10','��� ������', 0, 0)
INSERT INTO Post VALUES (7, '�� ������ ������ ���� �� ������.', '2023-01-28T14:25:10','�������', 2, 1)
INSERT INTO Post VALUES (8, '�� � ��� ��� ��������? ��� ������������.', '2023-01-25T14:25:10','��� ��������', 0, 0)
INSERT INTO Post VALUES (9, '� ��������', '2023-01-23T14:25:10','������', 0, 1)
INSERT INTO Post VALUES (9, '���� ���������! �������� ���-���������. ����� ����!', '2023-01-26T14:25:10','���� �������', 2, 2)
INSERT INTO Post VALUES (10, '����� ���������� � ���������, ��������� ������������, ������� ����� ������������� ������.', '2023-01-13T14:25:10','����� ����������', 1, 3)
INSERT INTO Post VALUES (10, '�������� ����� - ������������ �������������� ����������� ����� ���������, ������� 37 ������������ ����������������.', '2023-01-22T14:25:10','�������� �����', 0, 0)
INSERT INTO Post VALUES (10, '�� ������ ������ ��������� ���� ����������� � ����� ����� � �������� ���������� ��� Nupedia.', '2023-01-31T14:25:10','������ �����', 1, 0)

/* PostPhoto */
INSERT INTO PostPhoto VALUES (1, 'https://pressa.tv/uploads/posts/2019-03/thumbs/1554021536_pressa_tv_3.jpg')
INSERT INTO PostPhoto VALUES (2, 'https://tn.fishki.net/26/upload/post/2016/07/25/2022785/2-13.jpg')
INSERT INTO PostPhoto VALUES (3, 'https://kulturologia.ru/files/u21946/219464641.jpg')
INSERT INTO PostPhoto VALUES (4, 'https://faunistics.com/wp-content/uploads/2020/12/10-8-735x597.jpg')
INSERT INTO PostPhoto VALUES (5, 'https://i.artfile.ru/1280x960_356533_[www.ArtFile.ru].jpg')
INSERT INTO PostPhoto VALUES (6, 'https://i.pinimg.com/236x/d9/e6/c9/d9e6c95985447564e397fb323d680b0d--cartoon-cats-cameo.jpg')
INSERT INTO PostPhoto VALUES (7, 'https://sun9-31.userapi.com/impg/JTZD2ZgyJa1k6lkz6Uq_LX1V3fAkUTA_ISjNLQ/zOl7CetgIZ4.jpg?size=604x517&quality=96&sign=99a2c1ebf66cf02acfb7eedf17c6c679&type=album')
INSERT INTO PostPhoto VALUES (8, 'https://sun9-70.userapi.com/impg/eywep-MskXev4Z-tmvRBs_miMJ_OsGOoxW6MWw/E579DNJlta0.jpg?size=499x499&quality=96&sign=6c470838de683ddd587f289db278d5df&type=album')
INSERT INTO PostPhoto VALUES (9, 'https://attuale.ru/wp-content/uploads/2018/05/COLOURBOX46397481.jpg')
INSERT INTO PostPhoto VALUES (10, 'https://baniaisauna.ru/wp-content/uploads/maths_chemistry_biology_physics_tutors-scaled-1.jpg')
INSERT INTO PostPhoto VALUES (11, 'http://bomz.org/i/demotivators/682901-2010.07.07-01.48.25-photo02.jpg')
INSERT INTO PostPhoto VALUES (12, 'https://aif-s3.aif.ru/images/003/272/3172a0028abb9f4f47e88f64764ea3bd.jpg')
INSERT INTO PostPhoto VALUES (13, 'https://aif-s3.aif.ru/images/003/272/b39ab9e6480399512917dbd5dab6b80c.jpg')
INSERT INTO PostPhoto VALUES (14, 'https://aif-s3.aif.ru/images/003/272/0f1e3e21aa1c7f67fe8ff8b3f278cee8.jpg')
INSERT INTO PostPhoto VALUES (15, 'https://i.gyazo.com/8e2ba0e152383d2cbdec2801645ac264.png')
INSERT INTO PostPhoto VALUES (16, 'https://aif-s3.aif.ru/images/003/272/32a24de22e85ec96c33ef9787216cc45.jpg')
INSERT INTO PostPhoto VALUES (17, 'https://i09.fotocdn.net/s113/dfaad86d536e17a8/public_pin_l/2554603484.jpg')
INSERT INTO PostPhoto VALUES (18, 'https://i.gyazo.com/f9972a04adc033ed510a4c201c1341cb.png')
INSERT INTO PostPhoto VALUES (19, 'https://www.tut-news.ru/sites/default/files/2020-11/prilychnui.jpg')
INSERT INTO PostPhoto VALUES (20, 'https://i.pinimg.com/originals/18/db/e6/18dbe6a6b35ffa3cfc1334d2dd489ed7.jpg')
INSERT INTO PostPhoto VALUES (21, 'https://userpic.fishki.net/2021/04/16/348075/c6ce89eae437f90125aae67872013c30.jpg')
INSERT INTO PostPhoto VALUES (22, 'https://mtdata.ru/u25/photo3B42/20203396521-0/original.jpg')
INSERT INTO PostPhoto VALUES (23, 'https://moi-portal.ru/upload/resize_cache/webp/upload/articles/Vika/9424a2f64b4e0b91eec3ac9af978fe67.webp')
INSERT INTO PostPhoto VALUES (24, 'https://cdn.fishki.net/upload/post/2016/10/25/2116052/4301156011090039-800x562.jpg')
INSERT INTO PostPhoto VALUES (25, 'https://regnum.ru/uploads/pictures/news/2015/08/24/1440390259_wikilogo_normal.png')
INSERT INTO PostPhoto VALUES (26,'https://otvet.imgsmail.ru/download/5474628_e45408044bc8519603ddf32e922bd42e_800.jpg')
INSERT INTO PostPhoto VALUES (27, 'https://upload.wikimedia.org/wikipedia/commons/5/55/Wikipedia_affiliative_mark.png')

/* Tag */
INSERT INTO Tag VALUES ('�������')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('�������')
INSERT INTO Tag VALUES ('�����')
INSERT INTO Tag VALUES ('�����')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('����')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('�������')
INSERT INTO Tag VALUES ('����')
INSERT INTO Tag VALUES ('���')
INSERT INTO Tag VALUES ('����')
INSERT INTO Tag VALUES ('�����')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('��������')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('����')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('������')
INSERT INTO Tag VALUES ('�������')
INSERT INTO Tag VALUES ('����')

/* PostHasTag */
INSERT INTO PostHasTag VALUES (1, 1)
INSERT INTO PostHasTag VALUES (2, 1)
INSERT INTO PostHasTag VALUES (2, 2)
INSERT INTO PostHasTag VALUES (3, 3)
INSERT INTO PostHasTag VALUES (4, 4)
INSERT INTO PostHasTag VALUES (5, 4)
INSERT INTO PostHasTag VALUES (5, 5)
INSERT INTO PostHasTag VALUES (6, 6)
INSERT INTO PostHasTag VALUES (6, 7)
INSERT INTO PostHasTag VALUES (6, 8)
INSERT INTO PostHasTag VALUES (7, 9)
INSERT INTO PostHasTag VALUES (8, 9)
INSERT INTO PostHasTag VALUES (9, 9)
INSERT INTO PostHasTag VALUES (10, 9)
INSERT INTO PostHasTag VALUES (11, 9)
INSERT INTO PostHasTag VALUES (7, 10)
INSERT INTO PostHasTag VALUES (7, 11)
INSERT INTO PostHasTag VALUES (8, 12)
INSERT INTO PostHasTag VALUES (9, 13)
INSERT INTO PostHasTag VALUES (9, 11)
INSERT INTO PostHasTag VALUES (10, 14)
INSERT INTO PostHasTag VALUES (11, 12)
INSERT INTO PostHasTag VALUES (11, 13)
INSERT INTO PostHasTag VALUES (12, 15)
INSERT INTO PostHasTag VALUES (12, 16)
INSERT INTO PostHasTag VALUES (13, 15)
INSERT INTO PostHasTag VALUES (13, 16)
INSERT INTO PostHasTag VALUES (14, 15)
INSERT INTO PostHasTag VALUES (14, 16)
INSERT INTO PostHasTag VALUES (15, 15)
INSERT INTO PostHasTag VALUES (15, 16)
INSERT INTO PostHasTag VALUES (16, 15)
INSERT INTO PostHasTag VALUES (16, 16)
INSERT INTO PostHasTag VALUES (17, 15)
INSERT INTO PostHasTag VALUES (17, 16)
INSERT INTO PostHasTag VALUES (18, 15)
INSERT INTO PostHasTag VALUES (18, 16)
INSERT INTO PostHasTag VALUES (19, 17)
INSERT INTO PostHasTag VALUES (20, 18)
INSERT INTO PostHasTag VALUES (21, 18)
INSERT INTO PostHasTag VALUES (20, 16)
INSERT INTO PostHasTag VALUES (21, 19)
INSERT INTO PostHasTag VALUES (23, 20)
INSERT INTO PostHasTag VALUES (24, 20)
INSERT INTO PostHasTag VALUES (24, 21)
INSERT INTO PostHasTag VALUES (25, 22)
INSERT INTO PostHasTag VALUES (26, 22)
INSERT INTO PostHasTag VALUES (27, 22)


/* Comment */
INSERT INTO Comment VALUES (10, 3, '2023-01-08T14:25:10', '�����?')
INSERT INTO Comment VALUES (8, 4, '2023-01-23T14:25:10', '������� � ���� ����')
INSERT INTO Comment VALUES (4, 4, '2023-01-24T14:25:10', '� �� ���� �����((')
INSERT INTO Comment VALUES (3, 7, '2023-01-11T14:25:10', '����������')
INSERT INTO Comment VALUES (7, 7, '2023-01-12T14:25:10', '���� ������!!!')
INSERT INTO Comment VALUES (6, 7, '2023-01-13T14:25:10', '��������������')
INSERT INTO Comment VALUES (2, 7, '2023-01-14T14:25:10', '��� ��� ���')
INSERT INTO Comment VALUES (10, 7, '2023-01-15T14:25:10', '������ ������� ��������')
INSERT INTO Comment VALUES (8, 7, '2023-01-16T14:25:10', '��������� ���� ���-������')
INSERT INTO Comment VALUES (8, 7, '2023-01-17T14:25:10', '����������')
INSERT INTO Comment VALUES (8, 10, '2023-01-28T14:25:10', '��� ��������)))')
INSERT INTO Comment VALUES (8, 11, '2023-01-25T14:25:10', '���-�� ����')
INSERT INTO Comment VALUES (8, 23, '2023-01-23T14:25:10', '�����')
INSERT INTO Comment VALUES (4, 24, '2023-01-28T14:25:10', '� �, � �, � �')
INSERT INTO Comment VALUES (8, 24, '2023-01-31T14:25:10', '��-��-��')
INSERT INTO Comment VALUES (5, 25, '2023-01-18T14:25:10', '� ��� ����� ������������, ������?')
INSERT INTO Comment VALUES (7, 25, '2023-01-21T14:25:10', '�� �������...')
INSERT INTO Comment VALUES (6, 25, '2023-01-24T14:25:10', '� � ����')
INSERT INTO Comment VALUES (8, 21, '2023-01-28T14:25:10', '����, ������� ����')


/* Like */
INSERT INTO [Like] VALUES (10, 3, '2023-01-08T14:25:10')
INSERT INTO [Like] VALUES (10, 7, '2023-01-15T14:25:10')
INSERT INTO [Like] VALUES (9, 7, '2023-01-17T14:25:10')
INSERT INTO [Like] VALUES (8, 10, '2023-01-28T14:25:10')
INSERT INTO [Like] VALUES (8, 24, '2023-01-31T14:25:10')
INSERT INTO [Like] VALUES (8, 21, '2023-01-28T14:25:10')
INSERT INTO [Like] VALUES (10, 2, '2023-01-07T14:25:10')
INSERT INTO [Like] VALUES (1, 9, '2023-01-24T14:25:10')
INSERT INTO [Like] VALUES (1, 18, '2023-01-19T14:25:10')
INSERT INTO [Like] VALUES (1, 27, '2023-01-31T14:25:10')
INSERT INTO [Like] VALUES (2, 9, '2023-01-24T14:25:10')
INSERT INTO [Like] VALUES (2, 21, '2023-01-28T14:25:10')
INSERT INTO [Like] VALUES (3, 7, '2023-01-11T14:25:10')
INSERT INTO [Like] VALUES (3, 9, '2023-01-25T14:25:10')
INSERT INTO [Like] VALUES (4, 4, '2023-01-24T14:25:10')
INSERT INTO [Like] VALUES (4, 24, '2023-01-28T14:25:10')
INSERT INTO [Like] VALUES (5, 11, '2023-01-25T14:25:10')
INSERT INTO [Like] VALUES (6, 11, '2023-01-26T14:25:10')
INSERT INTO [Like] VALUES (6, 25, '2023-01-24T14:25:10')
INSERT INTO [Like] VALUES (7, 11, '2023-01-27T14:25:10')
INSERT INTO [Like] VALUES (7, 14, '2023-01-06T14:25:10')
INSERT INTO [Like] VALUES (7, 16, '2023-01-28T14:25:10')
INSERT INTO [Like] VALUES (7, 18, '2023-01-18T14:25:10')
INSERT INTO [Like] VALUES (8, 7, '2023-01-16T14:25:10')
INSERT INTO [Like] VALUES (8, 11, '2023-01-28T14:25:10')

/* Subscription */
INSERT INTO Subscription VALUES (2, 1, '2023-01-01T14:25:10')
INSERT INTO Subscription VALUES (7, 1, '2023-01-14T14:25:10')
INSERT INTO Subscription VALUES (8, 4, '2023-01-22T14:25:10')
INSERT INTO Subscription VALUES (9, 4, '2023-01-16T14:25:10')
INSERT INTO Subscription VALUES (6, 4, '2023-01-08T14:25:10')
INSERT INTO Subscription VALUES (2, 4, '2023-01-11T14:25:10')
INSERT INTO Subscription VALUES (5, 4, '2023-01-02T14:25:10')
INSERT INTO Subscription VALUES (3, 2, '2023-01-30T14:25:10')
INSERT INTO Subscription VALUES (2, 5, '2023-01-09T14:25:10')
INSERT INTO Subscription VALUES (10, 5, '2023-01-21T14:25:10')
INSERT INTO Subscription VALUES (4, 6, '2023-01-15T14:25:10')
INSERT INTO Subscription VALUES (4, 8, '2023-01-19T14:25:10')
INSERT INTO Subscription VALUES (9, 8, '2023-01-20T14:25:10')
INSERT INTO Subscription VALUES (8, 9, '2023-01-05T14:25:10')
INSERT INTO Subscription VALUES (4, 9, '2023-01-13T14:25:10')
INSERT INTO Subscription VALUES (1, 10, '2023-01-26T14:25:10')