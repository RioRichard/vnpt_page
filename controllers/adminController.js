const { render } = require("ejs");

async function getDashboard(req, res) {
    try {
        // Get stats from your database
        const stats = {
            posts: 0,  // Replace with actual count from database
            users: 0,  // Replace with actual count from database
            comments: 0 // Replace with actual count from database
        };

        // Get recent activities
        const recentActivities = [
            // You can populate this with actual data from your database
            // {
            //     icon: 'fas fa-file-alt',
            //     description: 'Bài viết mới được tạo',
            //     time: '2 phút trước'
            // }
        ];

        res.render('admin/dashboard', {
            title: 'Bảng điều khiển',
            layout: 'layouts/admin',
            stats,
            recentActivities
        });
    } catch (error) {
        console.error('Dashboard Error:', error);
        // res.status(500).render('error', {
        //     message: 'Có lỗi xảy ra',
        //     error: process.env.NODE_ENV === 'development' ? error : {}
        // });
    }
}

module.exports = {
    getDashboard
};
