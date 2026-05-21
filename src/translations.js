const makeGalleryItem = ({
  src,
  enCaption,
  faCaption,
  enCategory,
  faCategory,
  categoryKey,
  enDescription,
  faDescription,
  enAlt,
  faAlt,
  ratio = 'portrait',
  position = '50% 20%',
}) => ({
  src,
  enCaption,
  faCaption,
  enCategory,
  faCategory,
  categoryKey,
  enDescription: enDescription ?? enAlt,
  faDescription: faDescription ?? faAlt,
  enAlt,
  faAlt,
  ratio,
  position,
})

const learningAltEn =
  'Students are engaged in an active classroom lesson at Rumi International School.'
const learningAltFa =
  'شاگردان در یکی از صنف‌های فعال لیسه بین‌المللی رومی با تمرکز و علاقه سرگرم یادگیری‌اند.'

const awardAltEn =
  'A student proudly displays a medal, trophy, or certificate during a school recognition program.'
const awardAltFa =
  'دانش‌آموزی با افتخار مدال، جام یا تقدیرنامه‌اش را در برنامه‌ی تقدیر مکتب نشان می‌دهد.'

const groupAltEn =
  'Students celebrate academic progress and achievement together after a school program.'
const groupAltFa =
  'شاگردان پس از یک برنامه‌ی آموزشی، پیشرفت درسی و دستاوردهای خود را در کنار هم جشن می‌گیرند.'

const ceremonyAltEn =
  'A school ceremony or event is underway at Rumi International School.'
const ceremonyAltFa =
  'یکی از مراسم‌ها یا برنامه‌های رسمی لیسه بین‌المللی رومی در حال برگزاری است.'

const stageAltEn =
  'The school stage is prepared with balloons, school colors, and celebration decor.'
const stageAltFa =
  'صحنه‌ی مکتب با بادکنک‌ها، رنگ‌های رومی و تزئینات جشن آماده شده است.'

const learningItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'portrait',
  position = '50% 30%',
  enAlt = learningAltEn,
  faAlt = learningAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Learning Session',
    faCategory: 'جلسه‌ی آموزشی',
    categoryKey: 'learning-session',
    enAlt,
    faAlt,
    ratio,
    position,
  })

const classroomItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'portrait',
  position = '50% 30%',
  enDescription,
  faDescription,
  enAlt = learningAltEn,
  faAlt = learningAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Classroom Activities',
    faCategory: 'فعالیت‌های صنفی',
    categoryKey: 'classroom-activities',
    enDescription,
    faDescription,
    enAlt,
    faAlt,
    ratio,
    position,
  })

const assessmentItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'landscape',
  position = '50% 40%',
  enDescription,
  faDescription,
  enAlt = learningAltEn,
  faAlt = learningAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Assessment Session',
    faCategory: 'جلسه‌ی ارزیابی',
    categoryKey: 'assessment-session',
    enDescription,
    faDescription,
    enAlt,
    faAlt,
    ratio,
    position,
  })

const awardItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'portrait',
  position = '50% 18%',
  enAlt = awardAltEn,
  faAlt = awardAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Student Recognition',
    faCategory: 'تقدیر از شاگردان',
    categoryKey: 'student-recognition',
    enAlt,
    faAlt,
    ratio,
    position,
  })

const groupItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'landscape',
  position = '50% 36%',
  enAlt = groupAltEn,
  faAlt = groupAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'School Events',
    faCategory: 'رویدادهای مکتب',
    categoryKey: 'school-events',
    enAlt,
    faAlt,
    ratio,
    position,
  })

const ceremonyItem = (
  src,
  enCaption,
  faCaption,
  ratio = 'landscape',
  position = '50% 40%',
  enAlt = ceremonyAltEn,
  faAlt = ceremonyAltFa,
) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'School Events',
    faCategory: 'رویدادهای مکتب',
    categoryKey: 'school-events',
    enAlt,
    faAlt,
    ratio,
    position,
  })

const graduationItem = ({
  src,
  enCaption,
  faCaption,
  enDescription,
  faDescription,
  enAlt,
  faAlt,
  ratio = 'landscape',
  position = '50% 32%',
}) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Graduation Ceremony',
    faCategory: 'مراسم فراغت',
    categoryKey: 'graduation-ceremony',
    enDescription,
    faDescription,
    enAlt,
    faAlt,
    ratio,
    position,
  })

const childrensDayItem = ({
  src,
  enCaption,
  faCaption,
  enDescription,
  faDescription,
  enAlt,
  faAlt,
  ratio = 'portrait',
  position = '50% 26%',
}) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: "Children's Day Celebration",
    faCategory: 'جشن روز کودک',
    categoryKey: 'childrens-day-celebration',
    enDescription,
    faDescription,
    enAlt,
    faAlt,
    ratio,
    position,
  })

const recognitionItem = ({
  src,
  enCaption,
  faCaption,
  enDescription,
  faDescription,
  enAlt,
  faAlt,
  ratio = 'landscape',
  position = '50% 28%',
}) =>
  makeGalleryItem({
    src,
    enCaption,
    faCaption,
    enCategory: 'Student Recognition',
    faCategory: 'تقدیر از شاگردان',
    categoryKey: 'student-recognition',
    enDescription,
    faDescription,
    enAlt,
    faAlt,
    ratio,
    position,
  })

const galleryCatalog = [
  learningItem('/gallery/class-01.jpg', 'Active Learning', 'یادگیری فعال', 'portrait', '50% 34%'),
  awardItem('/gallery/awards-02.jpg', 'Award Ceremony', 'مراسم تقدیر', 'portrait', '50% 16%'),
  learningItem('/gallery/presentation-lesson-01.jpg', 'Mathematics Presentation', 'ارائه‌ی ریاضی', 'landscape', '50% 38%'),
  ceremonyItem(
    '/gallery/result-day-stage.jpg',
    'Result Day Stage',
    'صحنه‌ی روز نتایج',
    'landscape',
    '50% 40%',
    stageAltEn,
    stageAltFa,
  ),
  learningItem('/gallery/class-02.jpg', 'Digital Science Lesson', 'درس دیجیتالی ساینس', 'portrait', '50% 32%'),
  learningItem('/gallery/class-03.jpg', 'Bright Classroom', 'صنف روشن و منظم', 'portrait', '50% 34%'),
  learningItem('/gallery/class-04.jpg', 'Confident Participation', 'اشتراک با اعتماد', 'portrait', '50% 30%'),
  learningItem('/gallery/class-boys-audience-01.jpg', 'Student Gathering', 'گردهم‌آیی شاگردان', 'landscape', '50% 40%'),
  learningItem('/gallery/class-boys-audience-02.jpg', 'Assembly Hall', 'فضای گردهم‌آیی', 'landscape', '50% 40%'),
  learningItem('/gallery/class-boys-rows-01.jpg', 'Classroom Focus', 'تمرکز در صنف', 'portrait', '50% 34%'),
  learningItem('/gallery/class-girls-reading-01.jpg', 'Reading with Care', 'مطالعه با دقت', 'portrait', '50% 30%'),
  learningItem('/gallery/class-girls-reading-02.jpg', 'Quiet Concentration', 'تمرکز آرام', 'portrait', '50% 32%'),
  learningItem('/gallery/class-girls-reading-03.jpg', 'Love for Learning', 'شوق یادگیری', 'portrait', '50% 30%'),
  learningItem('/gallery/class-girls-writing-01.jpg', 'Focused Writing', 'تمرکز بر نوشتن', 'portrait', '50% 30%'),
  learningItem('/gallery/kindergarten-portrait-01.jpg', 'Joyful Early Years', 'شادی سال‌های نخست', 'portrait', '50% 22%'),
  learningItem('/gallery/kindergarten-portrait-02.jpg', 'Playful Discovery', 'کشف با شادمانی', 'portrait', '50% 22%'),
  learningItem('/gallery/kindergarten-writing-01.jpg', 'First Writing Steps', 'نخستین گام‌های نوشتن', 'portrait', '50% 34%'),
  learningItem('/gallery/kindergarten-writing-02.jpg', 'Careful Practice', 'تمرین با دقت', 'portrait', '50% 36%'),
  learningItem('/gallery/math-board-01.jpg', 'Math Practice', 'تمرین ریاضی', 'portrait', '50% 32%'),
  learningItem('/gallery/presentation-lesson-02.jpg', 'Life Cycle Lesson', 'درس چرخه‌ی حیات', 'landscape', '50% 42%'),
  ceremonyItem('/gallery/ceremony-01.jpg', 'Senior Assembly', 'نشست شاگردان', 'landscape', '50% 44%'),
  ceremonyItem('/gallery/ceremony-02.jpg', 'Recognition Moment', 'لحظه‌ی تقدیر', 'landscape', '50% 28%'),
  ceremonyItem('/gallery/ceremony-award-handshake-02.jpg', 'Honoring Excellence', 'تجلیل از برتری', 'portrait', '50% 24%'),
  ceremonyItem('/gallery/principal-student.jpg', 'Leadership Recognition', 'تقدیر از سوی رهبری', 'landscape', '50% 24%'),
  ceremonyItem('/gallery/result-day-stage-02.jpg', 'Celebration Decor', 'دکور جشن', 'landscape', '50% 38%', stageAltEn, stageAltFa),
  ceremonyItem('/gallery/teacher-audience-01.jpg', 'Audience Gathering', 'حضور مهمانان', 'landscape', '50% 42%'),
  ceremonyItem('/gallery/teacher-award-boy-01.jpg', 'Teacher Recognition', 'تقدیر توسط آموزگار', 'portrait', '50% 20%'),
  ceremonyItem('/gallery/teacher-award-student-04.jpg', 'Recognition by School Leadership', 'تقدیر توسط رهبری مکتب', 'portrait', '50% 18%'),
  ceremonyItem('/gallery/teacher-boy-award-02.jpg', 'Award Presentation', 'اهدای جایزه', 'portrait', '50% 18%'),
  ceremonyItem('/gallery/teacher-boy-award-03.jpg', 'Recognition with Pride', 'تقدیر با افتخار', 'portrait', '50% 18%'),
  ceremonyItem('/gallery/award-teacher-boy-05.jpg', 'Certificate with Mentor', 'تقدیرنامه همراه با آموزگار', 'portrait', '50% 18%'),
  ceremonyItem('/gallery/award-teacher-girl-13.jpg', 'Recognition with Mentor', 'تقدیر همراه با آموزگار', 'portrait', '50% 18%'),
  groupItem('/gallery/award-group-boys-02.jpg', 'Celebrating Progress', 'جشن پیشرفت', 'landscape', '50% 30%'),
  groupItem('/gallery/award-group-boys-03.jpg', 'Awarded Together', 'تقدیر گروهی', 'landscape', '50% 34%'),
  groupItem('/gallery/award-stage-boys-04.jpg', 'Stage of Success', 'صحنه‌ی موفقیت', 'landscape', '50% 30%'),
  groupItem('/gallery/boys-awards-group-01.jpg', 'Young Achievers', 'افتخارآفرینان کوچک', 'landscape', '50% 34%'),
  groupItem('/gallery/boys-medals-01.jpg', 'Medals of Merit', 'مدال‌های شایستگی', 'portrait', '50% 18%'),
  groupItem('/gallery/girls-awards-group-02.jpg', 'Proud Team', 'گروه پرافتخار', 'square', '50% 24%'),
  groupItem('/gallery/girls-medals-group-01.jpg', 'Shared Success', 'موفقیت مشترک', 'portrait', '50% 16%'),
  groupItem('/gallery/kids-group-stage-01.jpg', 'Stage of Success', 'صحنه‌ی موفقیت', 'landscape', '50% 32%'),
  awardItem('/gallery/awards-01.jpg', 'Young Achievers', 'افتخارآفرینان کوچک', 'portrait', '50% 20%'),
  ceremonyItem(
    '/gallery/awards-table.jpg',
    'Awards Ready',
    'جوایز آماده',
    'portrait',
    '50% 38%',
    'Trophies, medals, and certificates are arranged before the ceremony begins.',
    'جام‌ها، مدال‌ها و تقدیرنامه‌ها پیش از آغاز مراسم با نظم آماده شده‌اند.',
  ),
  ceremonyItem(
    '/gallery/trophies-close-01.jpg',
    'Trophy Details',
    'جزئیات جام‌ها',
    'portrait',
    '50% 45%',
    'Close-up view of trophies prepared for the recognition program.',
    'نمای نزدیک از جام‌هایی که برای برنامه‌ی تقدیر آماده شده‌اند.',
  ),
  ceremonyItem(
    '/gallery/result-day-trophies-02.jpg',
    'Recognition Collection',
    'مجموعه‌ی جوایز',
    'portrait',
    '50% 42%',
    'Rows of medals and trophies are prepared for student recognition.',
    'ردیف‌های منظم مدال و جام برای تقدیر از شاگردان آماده شده‌اند.',
  ),
  ceremonyItem(
    '/gallery/ramadan-banner-01.jpg',
    'Ramadan Greeting',
    'پیام تبریکی رمضان',
    'wide',
    '50% 40%',
    'A Ramadan greeting design prepared by Rumi International School.',
    'طرح تبریکی ماه مبارک رمضان از سوی لیسه بین‌المللی رومی.',
  ),
  makeGalleryItem({
    src: '/gallery/sat-banner-01.jpg',
    enCaption: 'School Notice Distribution',
    faCaption: 'توزیع اطلاعیه‌های مکتب',
    enCategory: 'School Announcements',
    faCategory: 'اطلاعیه‌های مکتب',
    categoryKey: 'school-announcements',
    enDescription:
      'A school notice board and printed announcement display prepared by Rumi International School.',
    faDescription:
      'بورد اطلاعیه و اعلان‌های چاپی مکتب که از سوی لیسه بین‌المللی رومی آماده شده‌اند.',
    enAlt: 'A school notice display prepared by Rumi International School.',
    faAlt: 'نمایی از اطلاعیه‌ها و اعلان‌های آماده‌شده‌ی لیسه بین‌المللی رومی.',
    ratio: 'wide',
    position: '50% 34%',
  }),
  awardItem('/gallery/award-boy-medal-02.jpg', 'Steady Progress', 'پیشرفت پیوسته'),
  awardItem('/gallery/award-boy-medal-03.jpg', 'Recognition Day', 'روز تجلیل'),
  awardItem('/gallery/award-boy-medal-04.jpg', 'Merit Award', 'جایزه‌ی شایستگی'),
  awardItem('/gallery/award-boy-medal-05.jpg', 'Academic Growth', 'رشد آموزشی'),
  awardItem('/gallery/award-boy-medal-06.jpg', 'School Honor', 'افتخار مکتب'),
  awardItem('/gallery/award-boy-medal-07.jpg', 'Academic Excellence', 'برتری آموزشی'),
  awardItem('/gallery/award-boy-medal-08.jpg', 'Gold Medal Pride', 'افتخار مدال طلایی'),
  awardItem('/gallery/award-girl-certificate-03.jpg', 'Bright Future', 'آینده‌ی روشن'),
  awardItem('/gallery/award-girl-certificate-04.jpg', 'Learning with Pride', 'یادگیری با افتخار'),
  awardItem('/gallery/award-girl-certificate-05.jpg', 'Confident Success', 'موفقیت با اعتماد', 'landscape', '50% 34%'),
  awardItem('/gallery/award-girl-certificate-06.jpg', 'Well-Earned Recognition', 'تقدیر شایسته', 'landscape', '50% 34%'),
  awardItem('/gallery/award-girl-certificate-07.jpg', 'Proud Milestone', 'گام مهم و پرافتخار'),
  awardItem('/gallery/award-girl-certificate-08.jpg', 'Recognition and Joy', 'شادی و تقدیر'),
  awardItem('/gallery/award-girl-certificate-09.jpg', 'Commitment Rewarded', 'پاداش تلاش', 'landscape', '50% 32%'),
  awardItem('/gallery/award-girl-certificate-10.jpg', 'Future Leader', 'رهبر آینده'),
  awardItem('/gallery/award-girl-gold-01.jpg', 'Golden Achievement', 'دستاورد طلایی'),
  awardItem('/gallery/award-girl-medal-01.jpg', 'Shining Medal', 'مدال درخشان'),
  awardItem('/gallery/award-portrait-boy-09.jpg', 'Result Sheet Pride', 'افتخار کارنامه'),
  awardItem('/gallery/award-portrait-boy-10.jpg', 'Focused Achievement', 'دستاورد با تمرکز'),
  awardItem('/gallery/award-portrait-boy-11.jpg', 'Recognition Portrait', 'پرتره‌ی تقدیر', 'landscape', '50% 30%'),
  awardItem('/gallery/award-portrait-boy-12.jpg', 'Award Day Portrait', 'پرتره‌ی روز جایزه', 'landscape', '50% 26%'),
  awardItem('/gallery/award-portrait-girl-11.jpg', 'Medal and Smile', 'لبخند و مدال'),
  awardItem('/gallery/award-portrait-girl-12.jpg', 'Certificate and Trophy', 'تقدیرنامه و جام'),
  awardItem('/gallery/award-portrait-girl-14.jpg', 'Proud Learner', 'شاگرد پرافتخار', 'landscape', '50% 28%'),
  awardItem('/gallery/award-portrait-girl-15.jpg', 'Achievement Portrait', 'پرتره‌ی دستاورد', 'landscape', '50% 30%'),
  awardItem('/gallery/award-portrait-girl-16.jpg', 'Celebrating Excellence', 'جشن برتری'),
  awardItem('/gallery/girl-certificate-01.jpg', 'Certificate of Merit', 'تقدیرنامه‌ی شایستگی'),
  awardItem('/gallery/girl-certificate-gold-02.jpg', 'Golden Certificate', 'تقدیرنامه‌ی طلایی'),
  awardItem('/gallery/girl-certificate-gold-03.jpg', 'Gold Ribbon Honor', 'افتخار با روبان طلایی'),
  awardItem('/gallery/girl-certificate-red-medal-01.jpg', 'Academic Pride', 'افتخار آموزشی'),
  awardItem('/gallery/girl-medal-result-01.jpg', 'Result Day Pride', 'افتخار روز نتایج'),
  awardItem('/gallery/girl-result-sheet-01.jpg', 'Report Card Success', 'موفقیت در کارنامه'),
  classroomItem(
    '/gallery/classroom-boys-focus-01.jpg',
    'Focused Classroom Moment',
    'لحظه‌ی تمرکز در صنف',
    'portrait',
    '50% 30%',
    'Young students sit together in a quiet classroom row while one learner looks ahead with concentration.',
    'شاگردان خردسال در ردیف صنف نشسته‌اند و شاگرد پیش‌رو با تمرکز به درس توجه دارد.',
    'A row of young students sits closely together during a classroom activity at Rumi International School.',
    'ردیفی از شاگردان خردسال در جریان یکی از فعالیت‌های صنفی لیسه بین‌المللی رومی نشسته‌اند.',
  ),
  assessmentItem(
    '/gallery/assessment-hall-01.jpg',
    'Assessment in Progress',
    'ارزیابی در جریان',
    'landscape',
    '50% 42%',
    'Students complete a supervised written assessment in a structured classroom setting.',
    'شاگردان در فضای منظم صنف زیر نظارت آموزگار، ارزیابی نوشتاری خود را تکمیل می‌کنند.',
    'Students are completing a formal classroom assessment while a teacher supervises from the center of the room.',
    'شاگردان در حال انجام یک ارزیابی رسمی صنفی‌اند و آموزگار از میان صنف بر روند آن نظارت می‌کند.',
  ),
  assessmentItem(
    '/gallery/assessment-lab-01.jpg',
    'Technology Classroom Assessment',
    'ارزیابی در صنف تکنالوژی',
    'landscape',
    '50% 40%',
    'Students work quietly through an assessment while teachers monitor from the back of the room.',
    'شاگردان با آرامش در ارزیابی خود مشغول‌اند و آموزگاران از عقب صنف بر روند کار نظارت دارند.',
    'Students sit in rows for a written assessment inside a technology classroom at Rumi International School.',
    'شاگردان در صنف تکنالوژی لیسه بین‌المللی رومی در ردیف‌ها نشسته‌اند و ارزیابی نوشتاری انجام می‌دهند.',
  ),
  learningItem(
    '/gallery/early-learning-reading-01.jpg',
    'Early Reading Practice',
    'تمرین خواندن در سال‌های نخست',
    'portrait',
    '50% 28%',
    'A young learner follows her notebook carefully during an early-years lesson.',
    'یک شاگرد خردسال در جریان درس سال‌های نخست، با دقت دفترچه‌اش را دنبال می‌کند.',
    'A young student concentrates on her notebook during an early learning session.',
    'یک شاگرد خردسال در جریان یکی از جلسه‌های آموزشی ابتدایی با دقت بر دفترچه‌اش تمرکز کرده است.',
  ),
  graduationItem({
    src: '/gallery/graduation-audience-01.jpg',
    enCaption: 'Ceremony Audience',
    faCaption: 'حاضران مراسم فراغت',
    enDescription: 'Families, guests, and senior students listen attentively during a formal graduation gathering.',
    faDescription: 'خانواده‌ها، مهمانان و شاگردان ارشد با دقت به برنامه‌ی رسمی فراغت گوش می‌دهند.',
    enAlt: 'Guests and senior students listen closely during a formal graduation ceremony at Rumi International School.',
    faAlt: 'مهمانان و شاگردان ارشد در جریان مراسم رسمی فراغت لیسه بین‌المللی رومی با دقت گوش می‌دهند.',
    ratio: 'landscape',
    position: '50% 30%',
  }),
  graduationItem({
    src: '/gallery/graduation-group-01.jpg',
    enCaption: 'Group Portrait',
    faCaption: 'عکس گروهی فراغت',
    enDescription: 'Graduates, teachers, and school guests gather for a formal portrait after the program.',
    faDescription: 'فارغان، آموزگاران و مهمانان مکتب پس از برنامه برای یک عکس رسمی گروهی گردهم آمده‌اند.',
    enAlt: 'Graduates, teachers, and guests pose together for a formal graduation portrait.',
    faAlt: 'فارغان، آموزگاران و مهمانان برای یک عکس رسمی مراسم فراغت در کنار هم ایستاده‌اند.',
    ratio: 'landscape',
    position: '50% 28%',
  }),
  graduationItem({
    src: '/gallery/graduation-stage-lineup-01.jpg',
    enCaption: 'Graduate Lineup',
    faCaption: 'صف فارغان',
    enDescription: 'Graduating students stand together on stage in formal dress before the ceremony begins.',
    faDescription: 'شاگردان فارغ در لباس رسمی، پیش از آغاز مراسم در کنار هم روی صحنه ایستاده‌اند.',
    enAlt: 'Graduating students stand in a formal lineup on stage during a graduation ceremony.',
    faAlt: 'شاگردان فارغ در جریان مراسم فراغت به‌شکل منظم روی صحنه صف کشیده‌اند.',
    ratio: 'wide',
    position: '50% 38%',
  }),
  graduationItem({
    src: '/gallery/graduation-speech-01.jpg',
    enCaption: 'Student Address',
    faCaption: 'سخنرانی شاگرد',
    enDescription: 'A graduating student delivers remarks from the podium during the ceremony.',
    faDescription: 'یکی از شاگردان فارغ در جریان مراسم از پشت تریبون سخنرانی می‌کند.',
    enAlt: 'A graduating student speaks from the podium during a formal school ceremony.',
    faAlt: 'یکی از شاگردان فارغ در جریان یک مراسم رسمی مکتب از پشت تریبون سخنرانی می‌کند.',
    ratio: 'landscape',
    position: '50% 24%',
  }),
  classroomItem(
    '/gallery/junior-writing-01.jpg',
    'Independent Writing Practice',
    'تمرین نوشتن مستقل',
    'portrait',
    '50% 32%',
    'A student writes carefully while classmates work around him in a bright classroom.',
    'شاگردی با دقت می‌نویسد، در حالی که هم‌صنفی‌هایش نیز در فضای روشن صنف سرگرم کار خود هستند.',
    'A student writes carefully in class while other children focus on their own work nearby.',
    'شاگردی در صنف با دقت می‌نویسد و در اطراف او کودکان دیگر نیز بر کارهای خود تمرکز دارند.',
  ),
  graduationItem({
    src: '/gallery/graduation-procession-01.jpg',
    enCaption: 'Ceremonial Entrance',
    faCaption: 'ورود تشریفاتی',
    enDescription: 'Graduates enter the hall in procession as families watch and record the moment.',
    faDescription: 'فارغان به‌شکل تشریفاتی وارد تالار می‌شوند و خانواده‌ها این لحظه را تماشا و ثبت می‌کنند.',
    enAlt: 'Graduates walk into the ceremony hall in procession while guests watch from the side.',
    faAlt: 'فارغان در حالی‌که مهمانان از کنار تالار تماشا می‌کنند، به‌شکل تشریفاتی وارد مراسم می‌شوند.',
    ratio: 'landscape',
    position: '50% 28%',
  }),
  graduationItem({
    src: '/gallery/graduation-flag-bearer-01.jpg',
    enCaption: 'Flag Bearer',
    faCaption: 'حامل بیرق',
    enDescription: 'A graduate carries the school flag through the ceremony hall.',
    faDescription: 'یکی از فارغان بیرق مکتب را در میان تالار مراسم حمل می‌کند.',
    enAlt: 'A graduate carries the school flag during the graduation procession.',
    faAlt: 'یکی از فارغان در جریان راه‌پیمایی مراسم فراغت بیرق مکتب را حمل می‌کند.',
    ratio: 'landscape',
    position: '50% 28%',
  }),
  graduationItem({
    src: '/gallery/graduation-procession-02.jpg',
    enCaption: 'Procession Through the Hall',
    faCaption: 'حرکت در تالار مراسم',
    enDescription: 'Graduates continue through the hall in an orderly procession before taking their places.',
    faDescription: 'فارغان پیش از نشستن در جایگاه خود، به‌شکل منظم از میان تالار مراسم عبور می‌کنند.',
    enAlt: 'Graduates move through the ceremony hall in a formal procession.',
    faAlt: 'فارغان در یک حرکت منظم و رسمی از میان تالار مراسم عبور می‌کنند.',
    ratio: 'landscape',
    position: '50% 30%',
  }),
  graduationItem({
    src: '/gallery/graduation-speech-02.jpg',
    enCaption: 'Graduate Speech',
    faCaption: 'سخنرانی فارغ',
    enDescription: 'A graduate speaks from the podium in front of the ceremony backdrop.',
    faDescription: 'یکی از فارغان در برابر پرده‌ی مراسم از پشت تریبون سخن می‌گوید.',
    enAlt: 'A graduate gives a speech from the podium during a school graduation ceremony.',
    faAlt: 'یکی از فارغان در جریان مراسم فراغت مکتب از پشت تریبون سخنرانی می‌کند.',
    ratio: 'landscape',
    position: '50% 24%',
  }),
  childrensDayItem({
    src: '/gallery/childrens-day-stage-01.jpg',
    enCaption: 'Celebration Stage Setup',
    faCaption: 'آماده‌سازی صحنه‌ی جشن',
    enDescription: 'The stage is prepared with balloons, cake, and school colors for a children’s celebration.',
    faDescription: 'صحنه با بادکنک‌ها، کیک و رنگ‌های مکتب برای جشن روز کودک آماده شده است.',
    enAlt: 'A decorated stage with balloons and a cake is prepared for a school celebration.',
    faAlt: 'صحنه‌ای آراسته با بادکنک و کیک برای یک جشن دانش‌آموزی آماده شده است.',
    ratio: 'portrait',
    position: '50% 34%',
  }),
  childrensDayItem({
    src: '/gallery/childrens-day-portrait-01.jpg',
    enCaption: 'Celebration Portrait',
    faCaption: 'پرتره‌ی جشن',
    enDescription: 'A student poses in festive dress during the children’s day program.',
    faDescription: 'یک شاگرد در لباس جشن در جریان برنامه‌ی روز کودک ژست گرفته است.',
    enAlt: 'A student smiles in festive dress during a children’s day celebration.',
    faAlt: 'یک شاگرد با لباس جشن در جریان برنامه‌ی روز کودک لبخند می‌زند.',
    ratio: 'portrait',
    position: '50% 24%',
  }),
  childrensDayItem({
    src: '/gallery/childrens-day-portrait-02.jpg',
    enCaption: 'Little Celebration Portrait',
    faCaption: 'پرتره‌ی کودک در جشن',
    enDescription: 'A young child stands beside the decorated stage during the celebration.',
    faDescription: 'کودکی خردسال در کنار صحنه‌ی آراسته‌ی جشن ایستاده است.',
    enAlt: 'A young child stands near the decorated stage during a school celebration.',
    faAlt: 'کودکی خردسال در جریان یک جشن دانش‌آموزی نزدیک صحنه‌ی آراسته ایستاده است.',
    ratio: 'portrait',
    position: '50% 22%',
  }),
  childrensDayItem({
    src: '/gallery/childrens-day-group-01.jpg',
    enCaption: "Children's Day Group",
    faCaption: 'گروه روز کودک',
    enDescription: 'Young students hold handmade signs to celebrate Children’s Day together.',
    faDescription: 'شاگردان خردسال با در دست داشتن نوشته‌های دست‌ساز، روز کودک را با هم جشن می‌گیرند.',
    enAlt: 'Young students hold handmade signs during a children’s day celebration.',
    faAlt: 'شاگردان خردسال در جریان جشن روز کودک، نوشته‌های دست‌ساز خود را در دست گرفته‌اند.',
    ratio: 'landscape',
    position: '50% 30%',
  }),
  childrensDayItem({
    src: '/gallery/childrens-day-group-02.jpg',
    enCaption: 'Young Celebration Portraits',
    faCaption: 'پرتره‌های جشن کودکان',
    enDescription: 'Students pose together in formal clothing during the children’s day program.',
    faDescription: 'شاگردان در لباس‌های آراسته در جریان برنامه‌ی روز کودک کنار هم ژست گرفته‌اند.',
    enAlt: 'Students pose together during a children’s day celebration at Rumi International School.',
    faAlt: 'شاگردان در جریان جشن روز کودک لیسه بین‌المللی رومی در کنار هم ژست گرفته‌اند.',
    ratio: 'landscape',
    position: '50% 32%',
  }),
  recognitionItem({
    src: '/gallery/student-recognition-01.jpg',
    enCaption: 'Certificate Presentation',
    faCaption: 'اهدای تقدیرنامه',
    enDescription: 'A teacher presents a certificate of appreciation to a student during a recognition program.',
    faDescription: 'آموزگاری در جریان برنامه‌ی تقدیر، تقدیرنامه‌ی سپاس را به یکی از شاگردان اهدا می‌کند.',
    enAlt: 'A teacher presents a certificate of appreciation to a student at a school recognition event.',
    faAlt: 'آموزگاری در یک برنامه‌ی تقدیر، تقدیرنامه‌ی سپاس را به شاگردی اهدا می‌کند.',
    ratio: 'landscape',
    position: '50% 32%',
  }),
  recognitionItem({
    src: '/gallery/student-recognition-awards-01.jpg',
    enCaption: 'Awards Table',
    faCaption: 'میز جوایز',
    enDescription: 'Certificates and trophies are arranged in front of the audience before the recognition ceremony.',
    faDescription: 'پیش از آغاز مراسم تقدیر، تقدیرنامه‌ها و جام‌ها در برابر حاضران با نظم چیده شده‌اند.',
    enAlt: 'Certificates and trophies are displayed before a school recognition ceremony begins.',
    faAlt: 'تقدیرنامه‌ها و جام‌ها پیش از آغاز مراسم تقدیر مکتب به نمایش گذاشته شده‌اند.',
    ratio: 'portrait',
    position: '50% 38%',
  }),
]

const eventShowcase = {
  featured: {
    image: '/gallery/graduation-stage-lineup-01.jpg',
    position: '50% 38%',
    titleEn: 'A school life shaped by learning, recognition, and moments of belonging',
    titleFa: 'فضایی که با یادگیری، تقدیر و حس تعلق شکل می‌گیرد',
    categoryEn: 'Featured School Experience',
    categoryFa: 'تجربه‌ی برجسته‌ی مکتب',
    descriptionEn:
      'At Rumi, events are not separate from academic life. They extend it by giving students moments to be recognized, to celebrate, and to grow with confidence in front of their teachers, classmates, and families.',
    descriptionFa:
      'در رومی، رویدادها از زندگی آموزشی جدا نیستند؛ بلکه ادامه‌ی آن‌اند. این برنامه‌ها به شاگردان فرصت می‌دهند تا دیده شوند، جشن بگیرند و در حضور آموزگاران، هم‌صنفی‌ها و خانواده‌هایشان با اعتماد رشد کنند.',
    imageAltEn:
      'Graduating students stand together on stage during a formal ceremony at Rumi International School.',
    imageAltFa:
      'شاگردان فارغ در جریان یک مراسم رسمی در لیسه بین‌المللی رومی روی صحنه در کنار هم ایستاده‌اند.',
  },
  highlights: [
    {
      image: '/gallery/graduation-procession-02.jpg',
      position: '50% 30%',
      titleEn: 'Graduation Ceremony',
      titleFa: 'مراسم فراغت',
      categoryEn: 'Graduation Ceremony',
      categoryFa: 'مراسم فراغت',
      descriptionEn:
        'Formal procession, stage presence, speeches, and group portraits turn graduation into a respectful milestone for students and families.',
      descriptionFa:
        'راه‌پیمایی رسمی، حضور روی صحنه، سخنرانی‌ها و عکس‌های گروهی، مراسم فراغت را به یک نقطه‌ی عطف محترمانه برای شاگردان و خانواده‌ها تبدیل می‌کند.',
      imageAltEn:
        'Graduating students walk through the ceremony hall in formal attire while guests watch.',
      imageAltFa:
        'شاگردان فارغ با لباس رسمی از میان تالار مراسم عبور می‌کنند و مهمانان آنان را تماشا می‌کنند.',
    },
    {
      image: '/gallery/student-recognition-01.jpg',
      position: '50% 32%',
      titleEn: 'Student Recognition Program',
      titleFa: 'برنامه‌ی تقدیر از شاگردان',
      categoryEn: 'Student Recognition',
      categoryFa: 'تقدیر از شاگردان',
      descriptionEn:
        'Certificates, awards, and teacher-led presentations create a warm setting for honoring effort, discipline, and academic progress.',
      descriptionFa:
        'تقدیرنامه‌ها، جوایز و برنامه‌های رهبری‌شده توسط آموزگاران، فضایی گرم برای ارج‌گذاری به تلاش، انضباط و پیشرفت درسی می‌سازند.',
      imageAltEn:
        'A teacher presents a certificate to a student during a recognition program at Rumi International School.',
      imageAltFa:
        'آموزگاری در لیسه بین‌المللی رومی در جریان برنامه‌ی تقدیر، تقدیرنامه‌ای را به شاگردی اهدا می‌کند.',
    },
    {
      image: '/gallery/childrens-day-group-01.jpg',
      position: '50% 30%',
      titleEn: "Children's Day Celebration",
      titleFa: 'جشن روز کودک',
      categoryEn: "Children's Day Celebration",
      categoryFa: 'جشن روز کودک',
      descriptionEn:
        'Decor, portraits, and joyful group moments give younger learners a meaningful celebration that feels bright, warm, and age-appropriate.',
      descriptionFa:
        'تزئینات، پرتره‌ها و لحظه‌های شاد گروهی، برای شاگردان خردسال جشن معناداری می‌سازند که روشن، گرم و متناسب با سن آنان است.',
      imageAltEn:
        'Young students hold colorful handmade signs during a children’s day celebration.',
      imageAltFa:
        'شاگردان خردسال در جریان جشن روز کودک نوشته‌های رنگارنگ دست‌ساز را در دست گرفته‌اند.',
    },
    {
      image: '/gallery/assessment-hall-01.jpg',
      position: '50% 42%',
      titleEn: 'Assessment Session',
      titleFa: 'جلسه‌ی ارزیابی',
      categoryEn: 'Learning Session',
      categoryFa: 'جلسه‌ی آموزشی',
      descriptionEn:
        'Supervised classroom assessments reflect the school’s emphasis on concentration, structure, and steady academic practice.',
      descriptionFa:
        'ارزیابی‌های زیر نظارت در صنف، نشان‌دهنده‌ی تأکید مکتب بر تمرکز، نظم و تمرین پیوسته‌ی آموزشی است.',
      imageAltEn:
        'Students complete a supervised classroom assessment at Rumi International School.',
      imageAltFa:
        'شاگردان در لیسه بین‌المللی رومی یک ارزیابی صنفی را زیر نظارت آموزگار تکمیل می‌کنند.',
    },
  ],
}

const faqSources = [
  {
    questionEn: 'What is the admission process?',
    questionFa: 'روند ثبت‌نام چگونه است؟',
    answerEn:
      'Families can begin by contacting the school, visiting the campus, and completing the required registration steps through the admissions team or portal.',
    answerFa:
      'خانواده‌ها می‌توانند با مکتب تماس بگیرند، از فضای آموزشی دیدن کنند و سپس مراحل لازم ثبت‌نام را از طریق بخش اداری یا پورتال تکمیل نمایند.',
  },
  {
    questionEn: 'What curriculum does the school follow?',
    questionFa: 'مکتب از چه نصاب یا برنامه‌ای پیروی می‌کند؟',
    answerEn:
      'Rumi combines strong core academic instruction with practical activities, digital learning, and classroom participation to build confident learners.',
    answerFa:
      'رومی در کنار دروس بنیادی، از فعالیت‌های عملی، آموزش دیجیتالی و اشتراک فعال صنفی استفاده می‌کند تا شاگردان با اعتماد و توانمند رشد کنند.',
  },
  {
    questionEn: 'Are there extracurricular activities?',
    questionFa: 'آیا فعالیت‌های غیر درسی هم وجود دارد؟',
    answerEn:
      'Yes. Students regularly participate in recognition programs, presentations, classroom projects, and collaborative activities throughout the year.',
    answerFa:
      'بله. شاگردان در طول سال در برنامه‌های تقدیر، ارائه‌های صنفی، پروژه‌های آموزشی و فعالیت‌های اجتماعی مکتب سهم می‌گیرند.',
  },
  {
    questionEn: 'What is the school fee?',
    questionFa: 'فیس مکتب چگونه است؟',
    answerEn:
      'Fee details are shared directly by the school administration so families can receive the most accurate and up-to-date information.',
    answerFa:
      'جزئیات فیس از سوی اداره‌ی مکتب به‌گونه‌ی مستقیم ارائه می‌شود تا خانواده‌ها دقیق‌ترین و تازه‌ترین معلومات را دریافت کنند.',
  },
  {
    questionEn: 'Is transportation available?',
    questionFa: 'آیا خدمات ترانسپورت موجود است؟',
    answerEn:
      'Transportation arrangements may vary by route and availability. Families are encouraged to contact the school for current details.',
    answerFa:
      'خدمات ترانسپورت بسته به مسیر و ظرفیت ممکن است متفاوت باشد. برای جزئیات تازه بهتر است مستقیماً با مکتب تماس گرفته شود.',
  },
  {
    questionEn: 'How can I contact the school?',
    questionFa: 'چگونه می‌توانم با مکتب تماس بگیرم؟',
    answerEn:
      'You can reach the school by phone, email, the website, or by visiting the campus in Afghanistan.',
    answerFa:
      'شما می‌توانید از طریق تلفن، ایمیل، وب‌سایت یا مراجعه‌ی حضوری به مکتب در پروژه‌ی تایمنی کابل با ما در تماس شوید.',
  },
]

export const en = {
  brand: {
    short: 'Rumi',
    full: 'Rumi International School',
  },
  nav: {
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    events: 'Events',
    faq: 'FAQ',
    portal: 'Portal',
    toggleTheme: 'Toggle light and dark mode',
    toggleLanguage: 'Toggle language',
    openMenu: 'Open navigation menu',
  },
  common: {
    learnMore: 'Learn more',
    close: 'Close',
    all: 'All',
    next: 'Next',
    previous: 'Previous',
  },
  notFound: {
    code: 'Error 404',
    eyebrow: 'Page not found',
    title: 'This page stepped out of the school corridor',
    description: 'The address you opened does not point to an active page on the Rumi website.',
    body: 'You can return to the homepage, continue to the gallery, or explore current school events from the shortcuts below.',
    requestedPath: 'Requested path',
    primaryButton: 'Back Home',
    secondaryButton: 'Open Gallery',
    visualEyebrow: 'Still close',
    visualTitle: 'Most visitors continue from here in just one click',
    visualDescription:
      'If you were looking for school life, photos, or the latest highlights, the links below will get you back on track quickly.',
    imageAlt: 'A group of Rumi students gathered together during a school celebration.',
    quickLinksEyebrow: 'Helpful shortcuts',
    quickLinksTitle: 'Continue somewhere useful',
    quickLinksDescription: 'These are the quickest paths back into the main parts of the website.',
    quickLinks: [
      {
        title: 'Home',
        description: 'Return to the main welcome page and see the school overview.',
        cta: 'Go Home',
      },
      {
        title: 'Gallery',
        description: 'Browse classroom moments, events, and student recognition.',
        cta: 'View Photos',
      },
      {
        title: 'Events',
        description: 'See ceremonies, celebrations, and recent school highlights.',
        cta: 'See Events',
      },
    ],
  },
  home: {
    badge: 'Admissions Open for 2026',
    title: 'Welcome to Rumi International School',
    description:
      'A gracious, forward-looking learning community in Afghanistan where academic excellence, confidence, and character are nurtured in lasting harmony.',
    primaryButton: 'Open Portal',
    secondaryButton: 'View Gallery',
    heroImageAlt: 'SAT digital exam success banner displayed by Rumi International School.',
    classroomImageAlt:
      'Young students seated together during a focused classroom activity at Rumi International School.',
    classroomImageDescription:
      'A closer look at everyday learning where attention, discipline, and student presence shape the classroom atmosphere.',
    achievementEyebrow: 'Academic Progress',
    achievementTitle: 'A school culture where effort is noticed and achievement is celebrated',
    achievementBody:
      'From the earliest years to upper grades, students are encouraged to speak up, stay disciplined, and take pride in real growth.',
    stats: [
      { value: '2007', label: 'Established' },
      { value: '12+', label: 'Learning pathways' },
      { value: '7000+', label: 'Students inspired' },
    ],
    highlightsEyebrow: 'Why Families Choose Rumi',
    highlightsTitle: 'Learning designed for real growth',
    highlightsDescription:
      'Every part of the student experience is shaped to feel safe, ambitious, and supportive.',
    highlights: [
      {
        kicker: 'Safe',
        title: 'Welcoming, structured classrooms',
        description:
          'Students learn in an environment that values respect, daily consistency, and confident participation.',
      },
      {
        kicker: 'Modern',
        title: 'Digital and practical learning',
        description:
          'Presentations, classroom technology, and active lessons help ideas become clearer and more memorable.',
      },
      {
        kicker: 'Purposeful',
        title: 'Character alongside achievement',
        description:
          'We celebrate strong results while also building responsibility, discipline, and self-belief.',
      },
    ],
    storyEyebrow: 'Inside Rumi',
    storyTitle: 'A learning environment that turns hard work into visible progress',
    storyDescription:
      'From vibrant classrooms to recognition ceremonies, Rumi helps students grow in both skill and self-confidence.',
    storyBody:
      'Our classrooms are active, guided, and encouraging. Students are invited to ask questions, take part with confidence, and feel proud of the effort they invest every day. Families choose Rumi because they see a balance of strong expectations, close support, and meaningful results.',
    storyQuote:
      '"We want every student to feel ready, respected, and proud of the future they are building."',
    storyPillars: [
      {
        title: 'Active learning every day',
        description:
          'Lessons are designed to keep students involved through discussion, practice, and visible participation.',
      },
      {
        title: 'Support that stays close',
        description:
          'Teachers encourage questions, notice effort, and help students build confidence step by step.',
      },
      {
        title: 'Progress families can see',
        description:
          'Strong routines, clear expectations, and recognition moments turn effort into meaningful results.',
      },
    ],
    galleryTitle: 'A visual journey through life at Rumi',
    galleryDescription:
      'Explore classrooms, ceremonies, projects, and proud student moments across the Rumi learning experience.',
    galleryInteractionHint:
      'These lower cards refresh on each visit to keep the homepage feeling alive without changing the layout.',
    ctaImageAlt: 'Students completing a lesson inside a structured classroom at Rumi International School.',
    ctaEyebrow: 'Ready for the next step',
    ctaTitle: 'Stay connected to student progress and school life',
    ctaBody:
      'Whether you are checking updates, following academic progress, or staying close to school communication, the portal keeps everything within reach.',
  },
  about: {
    eyebrow: 'About Rumi',
    title: 'A modern school rooted in strong values and ambitious learning',
    intro:
      'At Rumi International School, we believe education is the foundation of a stronger future for Afghanistan. Our school provides students and families across Afghanistan with a modern learning environment built on knowledge, discipline, respect, and personal development.',
    paragraphs: [
      'Since its establishment, Rumi has been committed to creating classrooms where academic excellence and strong character grow together. Through dedicated teaching, clear expectations, and continuous encouragement, we help students develop confidence, responsibility, and a genuine passion for learning.',
      'Our educational approach combines core academic subjects with technology, digital literacy, presentations, critical thinking, and practical learning experiences. Students are encouraged to communicate effectively, think independently, and gradually take ownership of their academic journey and personal growth.',
      'At Rumi, success is measured not only by academic achievement, but also by the values our students carry into society. We aim to prepare a new generation of learners who are respectful, capable, and ready to contribute positively to their families, communities, and the future of Afghanistan.',
      'With a balance of modern education and strong moral values, Rumi International School continues to build an environment where students are inspired to learn, lead, and succeed.',
    ],
    imageAlt: 'Students completing a structured classroom assessment at Rumi International School.',
    missionEyebrow: 'Mission',
    missionTitle: 'To nurture capable, ethical, and confident learners',
    missionText:
      'Our mission is to provide a safe and inspiring education so students can build academic strength, practical skills, and strong character for a changing world.',
    visionEyebrow: 'Vision',
    visionTitle: 'To be a trusted learning institution for Afghanistan',
    visionText:
      'We aim to grow as a respected school known for quality teaching, meaningful student support, and a culture that turns effort into opportunity.',
    pillarsEyebrow: 'Core Pillars',
    pillarsTitle: 'What shapes the Rumi experience',
    pillarsDescription:
      'These commitments guide the way we teach, celebrate progress, and work with families.',
    pillars: [
      {
        kicker: 'Excellence',
        title: 'High academic expectations',
        description:
          'Students are encouraged toward mastery through steady practice, clear goals, and strong instruction.',
      },
      {
        kicker: 'Support',
        title: 'A caring environment',
        description:
          'Teachers know their students, notice effort, and help every learner feel seen and valued.',
      },
      {
        kicker: 'Innovation',
        title: 'Modern learning tools',
        description:
          'Digital lessons, presentations, and practical resources help learning feel current, engaging, and useful.',
      },
      {
        kicker: 'Character',
        title: 'Leadership and responsibility',
        description:
          'Students are guided to act with discipline, respect, and self-confidence inside and beyond the classroom.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'A visual story of life at Rumi',
    description:
      'Browse classroom moments, recognition ceremonies, children’s celebrations, and the everyday energy of learning at Rumi International School.',
    toolbarNote: 'Explore by theme and open any image for a larger preview.',
    seeMore: 'See More',
    items: galleryCatalog.map((item) => ({
      src: item.src,
      alt: item.enAlt,
      caption: item.enCaption,
      category: item.enCategory,
      categoryKey: item.categoryKey,
      description: item.enDescription,
      ratio: item.ratio,
      position: item.position,
    })),
  },
  events: {
    eyebrow: 'School Events',
    title: 'Real moments that bring students, families, and teachers closer together',
    description:
      'From graduation to classroom recognition and children’s celebrations, these programs reflect the warm, academic life of Rumi.',
    featured: {
      title: eventShowcase.featured.titleEn,
      category: eventShowcase.featured.categoryEn,
      description: eventShowcase.featured.descriptionEn,
      image: eventShowcase.featured.image,
      imageAlt: eventShowcase.featured.imageAltEn,
      position: eventShowcase.featured.position,
    },
    highlights: eventShowcase.highlights.map((item) => ({
      title: item.titleEn,
      category: item.categoryEn,
      description: item.descriptionEn,
      image: item.image,
      imageAlt: item.imageAltEn,
      position: item.position,
    })),
  },
  faq: {
    eyebrow: 'Family Guide',
    title: 'Frequently Asked Questions',
    description:
      'Clear answers to common questions about admissions, school life, family communication, and student support.',
    items: faqSources.map((item) => ({
      question: item.questionEn,
      answer: item.answerEn,
    })),
  },
  footer: {
    contactTitle: 'Contact',
    tagline:
      'Rumi International School blends strong academics with a caring environment so students can grow with confidence and purpose.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    address: '4th Street of Project Taimani, Kabul, Afghanistan',
    websiteLabel: 'Website',
    viewMap: 'View on Google Maps',
    rightsReserved: 'All Rights Reserved — Rumi International School',
    developedBy: 'Developed by',
  },
}

export const fa = {
  brand: {
    short: 'رومی',
    full: 'لیسه بین‌المللی رومی',
  },
  nav: {
    home: 'خانه',
    about: 'درباره',
    gallery: 'گالری',
    events: 'رویدادها',
    faq: 'پرسش‌ها',
    portal: 'پورتال',
    toggleTheme: 'تغییر حالت روشن و تاریک',
    toggleLanguage: 'تغییر زبان',
    openMenu: 'باز کردن منو',
  },
  common: {
    learnMore: 'بیشتر بخوانید',
    close: 'بستن',
    all: 'همه',
    next: 'بعدی',
    previous: 'قبلی',
  },
  notFound: {
    code: 'خطای ۴۰۴',
    eyebrow: 'صفحه یافت نشد',
    title: 'این صفحه از مسیر وب‌سایت رومی بیرون رفته است',
    description: 'آدرسی که باز کرده‌اید به یکی از صفحه‌های فعال وب‌سایت رومی اشاره نمی‌کند.',
    body: 'می‌توانید به خانه برگردید، گالری را ببینید یا از راه‌های میان‌بر زیر به بخش‌های مهم برسید.',
    requestedPath: 'مسیر درخواست‌شده',
    primaryButton: 'بازگشت به خانه',
    secondaryButton: 'باز کردن گالری',
    visualEyebrow: 'هنوز نزدیکید',
    visualTitle: 'بیشتر بازدیدکننده‌ها از اینجا با یک کلیک ادامه می‌دهند',
    visualDescription:
      'اگر دنبال زندگی آموزشی، تصویرها یا تازه‌ترین رویدادها بودید، لینک‌های زیر شما را زود به مسیر درست برمی‌گرداند.',
    imageAlt: 'گروهی از شاگردان رومی در یکی از برنامه‌های مکتب در کنار یکدیگر گرد آمده‌اند.',
    quickLinksEyebrow: 'میان‌برهای کاربردی',
    quickLinksTitle: 'به یک بخش مفید ادامه بدهید',
    quickLinksDescription: 'این‌ها سریع‌ترین راه‌ها برای بازگشت به بخش‌های اصلی وب‌سایت هستند.',
    quickLinks: [
      {
        title: 'خانه',
        description: 'به صفحه‌ی اصلی برگردید و نمایی کلی از مکتب را ببینید.',
        cta: 'رفتن به خانه',
      },
      {
        title: 'گالری',
        description: 'لحظه‌های صنفی، رویدادها و تقدیر از شاگردان را ببینید.',
        cta: 'دیدن تصویرها',
      },
      {
        title: 'رویدادها',
        description: 'مراسم‌ها، جشن‌ها و برجسته‌ترین رویدادهای مکتب را مشاهده کنید.',
        cta: 'دیدن رویدادها',
      },
    ],
  },
  home: {
    badge: 'ثبت‌نام ۲۰۲۶ باز است',
    title: 'به لیسه بین‌المللی رومی خوش آمدید',
    description:
      'جامعه‌ای آموزشی، سنجیده و آینده‌نگر در افغانستان که در آن برتری علمی، اعتمادبه‌نفس و پرورش شخصیت در هماهنگی ماندگار بالنده می‌شوند.',
    primaryButton: 'ورود به پورتال',
    secondaryButton: 'دیدن گالری',
    heroImageAlt: 'بنر موفقیت آزمون دیجیتال SAT در لیسه بین‌المللی رومی به نمایش گذاشته شده است.',
    classroomImageAlt:
      'شاگردان خردسال در جریان یکی از فعالیت‌های صنفی با تمرکز در کنار هم نشسته‌اند.',
    classroomImageDescription:
      'نمایی نزدیک از جریان یادگیری روزانه؛ جایی که توجه، انضباط و حضور فعال شاگردان فضای صنف را شکل می‌دهد.',
    achievementEyebrow: 'پیشرفت آموزشی',
    achievementTitle: 'فرهنگی آموزشی که در آن تلاش دیده می‌شود و دستاوردها تجلیل می‌گردد',
    achievementBody:
      'از سال‌های نخست تا صنف‌های بالاتر، شاگردان تشویق می‌شوند با اعتماد سخن بگویند، منظم بمانند و به پیشرفت واقعی خود افتخار کنند.',
    stats: [
      { value: '۲۰۰۷', label: 'سال تأسیس' },
      { value: '۱۲+', label: 'مسیرهای آموزشی' },
      { value: '۷۰۰۰+', label: 'شاگرد الهام‌گرفته' },
    ],
    highlightsEyebrow: 'چرا خانواده‌ها رومی را انتخاب می‌کنند',
    highlightsTitle: 'آموزشی طراحی‌شده برای رشد واقعی',
    highlightsDescription:
      'هر بخش از تجربه‌ی شاگردان طوری شکل گرفته که هم امن باشد، هم هدفمند و هم پشتیبان پیشرفت.',
    highlights: [
      {
        kicker: 'امن',
        title: 'صنف‌های صمیمی و منظم',
        description:
          'شاگردان در فضایی آموزش می‌بینند که در آن احترام، نظم روزانه و اشتراک با اعتماد تشویق می‌شود.',
      },
      {
        kicker: 'مدرن',
        title: 'یادگیری دیجیتالی و عملی',
        description:
          'ارائه‌ها، ابزارهای صنفی و آموزش فعال باعث می‌شوند مفاهیم درسی روشن‌تر، جذاب‌تر و ماندگارتر شوند.',
      },
      {
        kicker: 'هدفمند',
        title: 'شخصیت‌سازی در کنار دستاورد',
        description:
          'در کنار نتیجه‌های خوب، ما مسئولیت‌پذیری، انضباط و باور به توانایی‌های شاگردان را نیز تقویت می‌کنیم.',
      },
    ],
    storyEyebrow: 'درون رومی',
    storyTitle: 'جامعه‌ای آموزشی که تلاش را به پیشرفت قابل دیدن تبدیل می‌کند',
    storyDescription:
      'از صنف‌های پرانرژی تا مراسم‌های تقدیر، رومی به شاگردان کمک می‌کند هم در مهارت و هم در باور به خود رشد کنند.',
    storyBody:
      'صنف‌های ما فعال، هدایت‌شده و دلگرم‌کننده‌اند. شاگردان تشویق می‌شوند سؤال بپرسند، با اعتماد سهم بگیرند و نسبت به تلاشی که هر روز انجام می‌دهند احساس افتخار داشته باشند. خانواده‌ها رومی را به‌خاطر توازن میان توقعات بلند، حمایت نزدیک و نتیجه‌های معنادار انتخاب می‌کنند.',
    storyQuote:
      '«می‌خواهیم هر شاگرد برای آینده‌ای که می‌سازد، احساس آمادگی، احترام و افتخار داشته باشد.»',
    storyPillars: [
      {
        title: 'یادگیری فعال در هر روز',
        description:
          'درس‌ها به‌گونه‌ای طراحی می‌شوند که شاگردان با گفت‌وگو، تمرین و سهم‌گیری روشن درگیر یادگیری باشند.',
      },
      {
        title: 'حمایتی که نزدیک می‌ماند',
        description:
          'آموزگاران به پرسش‌ها میدان می‌دهند، تلاش را می‌بینند و گام‌به‌گام اعتماد شاگردان را تقویت می‌کنند.',
      },
      {
        title: 'پیشرفتی که خانواده‌ها می‌بینند',
        description:
          'نظم آموزشی، توقعات روشن و لحظه‌های تقدیر، تلاش را به نتیجه‌های معنادار تبدیل می‌کند.',
      },
    ],
    galleryTitle: 'روایت تصویری از زندگی در رومی',
    galleryDescription:
      'از صنف‌ها تا مراسم‌ها و لحظه‌های پرافتخار شاگردان، این بخش گوشه‌هایی از تجربه‌ی آموزشی رومی را نشان می‌دهد.',
    galleryInteractionHint:
      'این کارت‌های پایینی در هر بازدید تازه می‌شوند تا صفحه زنده بماند، بدون آن‌که ساختار آن تغییر کند.',
    ctaImageAlt: 'شاگردان در یکی از صنف‌های منظم لیسه بین‌المللی رومی در حال درس‌خواندن‌اند.',
    ctaEyebrow: 'آماده برای گام بعدی',
    ctaTitle: 'همیشه با پیشرفت شاگردان و زندگی آموزشی در ارتباط بمانید',
    ctaBody:
      'چه برای دیدن تازه‌ترین اطلاعات، چه پیگیری پیشرفت درسی و چه ارتباط نزدیک با مکتب، پورتال همه‌چیز را در دسترس شما نگه می‌دارد.',
  },
  about: {
    eyebrow: 'درباره رومی',
    title: 'مرکز آموزشی مدرن با ریشه در ارزش‌های قوی و آموزش بلندپروازانه',
    intro:
      'در لیسه بین‌المللی رومی، ما باور داریم که آموزش زیربنای آینده‌ای نیرومندتر برای افغانستان است. رومی برای شاگردان و خانواده‌ها در سراسر افغانستان، محیطی آموزشی و مدرن فراهم می‌کند که بر دانش، انضباط، احترام و رشد فردی استوار است.',
    paragraphs: [
      'رومی از زمان تأسیس خود متعهد بوده است صنف‌هایی بسازد که در آن برتری آموزشی و شخصیت نیرومند در کنار هم رشد کنند. از راه تدریس متعهدانه، توقعات روشن و تشویق پیوسته، ما به شاگردان کمک می‌کنیم تا اعتمادبه‌نفس، مسئولیت‌پذیری و شوق واقعی به یادگیری را در خود پرورش دهند.',
      'رویکرد آموزشی ما، مضامین اساسی درسی را با تکنالوژی، سواد دیجیتالی، ارائه‌ها، تفکر انتقادی و تجربه‌های عملی یادگیری پیوند می‌دهد. شاگردان تشویق می‌شوند به‌گونه‌ای مؤثر ارتباط برقرار کنند، مستقلانه بیندیشند و گام‌به‌گام مسئولیت مسیر آموزشی و رشد شخصی خود را به عهده بگیرند.',
      'در رومی، موفقیت تنها با دستاوردهای درسی سنجیده نمی‌شود، بلکه با ارزش‌هایی نیز اندازه‌گیری می‌شود که شاگردان ما با خود به جامعه می‌برند. هدف ما این است که نسل تازه‌ای از یادگیرندگان را آماده سازیم که بااحترام، توانمند و آماده‌ی سهم‌گیری مثبت در خانواده‌ها، جامعه و آینده‌ی افغانستان باشند.',
      'با توازن میان آموزش مدرن و ارزش‌های اخلاقی استوار، لیسه بین‌المللی رومی همچنان محیطی را می‌سازد که در آن شاگردان برای یادگیری، رهبری و موفقیت الهام می‌گیرند.',
    ],
    imageAlt: 'شاگردان در یکی از صنف‌های لیسه بین‌المللی رومی در جریان ارزیابی آموزشی نشسته‌اند.',
    missionEyebrow: 'ماموریت',
    missionTitle: 'پرورش شاگردان توانمند، بااخلاق و بااعتماد',
    missionText:
      'ماموریت ما ارائه‌ی آموزشی امن و الهام‌بخش است تا شاگردان بتوانند توانایی درسی، مهارت عملی و شخصیت نیرومند برای دنیای در حال تغییر بسازند.',
    visionEyebrow: 'چشم‌انداز',
    visionTitle: 'تبدیل شدن به یک نهاد آموزشی مورد اعتماد برای افغانستان',
    visionText:
      'چشم‌انداز ما رشد به‌عنوان نهادی محترم است که به‌خاطر کیفیت آموزش، حمایت معنادار از شاگردان و فرهنگی که تلاش را به فرصت تبدیل می‌کند شناخته شود.',
    pillarsEyebrow: 'ستون‌های اصلی',
    pillarsTitle: 'چه چیزی تجربه‌ی رومی را شکل می‌دهد',
    pillarsDescription:
      'این تعهدها راهنمای شیوه‌ی آموزش، تجلیل از پیشرفت و همکاری ما با خانواده‌ها هستند.',
    pillars: [
      {
        kicker: 'برتری',
        title: 'توقعات بلند آموزشی',
        description:
          'شاگردان از راه تمرین پیوسته، هدف‌های روشن و تدریس قوی به‌سوی تسلط درسی هدایت می‌شوند.',
      },
      {
        kicker: 'حمایت',
        title: 'محیطی دل‌سوزانه',
        description:
          'آموزگاران شاگردان را می‌شناسند، تلاش را می‌بینند و کمک می‌کنند هر یادگیرنده احساس ارزشمندی کند.',
      },
      {
        kicker: 'نوآوری',
        title: 'ابزارهای مدرن آموزشی',
        description:
          'درس‌های دیجیتالی، ارائه‌ها و منابع عملی باعث می‌شوند آموزش تازه، جذاب و سودمند باشد.',
      },
      {
        kicker: 'شخصیت',
        title: 'رهبری و مسئولیت',
        description:
          'شاگردان هدایت می‌شوند تا در داخل و بیرون از صنف با انضباط، احترام و اعتماد عمل کنند.',
      },
    ],
  },
  gallery: {
    eyebrow: 'گالری',
    title: 'روایت تصویری از زندگی در رومی',
    description:
      'در این بخش می‌توانید گوشه‌هایی از صنف‌ها، مراسم فراغت، جشن روز کودک و لحظه‌های پرشور آموزشی لیسه بین‌المللی رومی را ببینید.',
    toolbarNote: 'بر اساس موضوع مرور کنید و هر تصویر را برای دیدن بزرگ‌تر باز نمایید.',
    seeMore: 'دیدن بیشتر',
    items: galleryCatalog.map((item) => ({
      src: item.src,
      alt: item.faAlt,
      caption: item.faCaption,
      category: item.faCategory,
      categoryKey: item.categoryKey,
      description: item.faDescription,
      ratio: item.ratio,
      position: item.position,
    })),
  },
  events: {
    eyebrow: 'رویدادها و برنامه‌ها',
    title: 'لحظه‌های واقعی که شاگردان، خانواده‌ها و آموزگاران را به هم نزدیک‌تر می‌کند',
    description:
      'از مراسم فراغت تا تقدیر از شاگردان و جشن‌های کودکان، این برنامه‌ها گرمی و هویت آموزشی رومی را بازتاب می‌دهند.',
    featured: {
      title: eventShowcase.featured.titleFa,
      category: eventShowcase.featured.categoryFa,
      description: eventShowcase.featured.descriptionFa,
      image: eventShowcase.featured.image,
      imageAlt: eventShowcase.featured.imageAltFa,
      position: eventShowcase.featured.position,
    },
    highlights: eventShowcase.highlights.map((item) => ({
      title: item.titleFa,
      category: item.categoryFa,
      description: item.descriptionFa,
      image: item.image,
      imageAlt: item.imageAltFa,
      position: item.position,
    })),
  },
  faq: {
    eyebrow: 'راهنمای خانواده‌ها',
    title: 'پرسش‌های متداول',
    description:
      'پاسخ‌های روشن و کوتاه به سوالات رایج درباره‌ی ثبت‌نام، زندگی آموزشی، ارتباط با خانواده‌ها و حمایت از شاگردان.',
    items: faqSources.map((item) => ({
      question: item.questionFa,
      answer: item.answerFa,
    })),
  },
  footer: {
    contactTitle: 'تماس',
    tagline:
      'لیسه بین‌المللی رومی آموزش قوی را با محیطی دل‌سوزانه پیوند می‌زند تا شاگردان با اعتماد و هدف رشد کنند.',
    phoneLabel: 'تلفن',
    emailLabel: 'ایمیل',
    addressLabel: 'آدرس',
    address: 'سرک چهارم پروژۀ تایمنی، کابل، افغانستان',
    websiteLabel: 'وب‌سایت',
    viewMap: 'نمایش در گوگل مپ',
    rightsReserved: 'تمام حقوق محفوظ است — لیسه بین‌المللی رومی',
    developedBy: 'توسعه‌داده‌شده توسط',
  },
}

export const translations = { en, fa }
