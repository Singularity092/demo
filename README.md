How to use git?

git init: để bắt đầu dùng git cho thư mục
git status : kiểm tra những file chưa đc commit
git add : thêm file vào 
git commit : commit file add

git log : Hiển thị các commit
git show + idcommit : hiển thị content của commit đó
git diff : xem sự khác nhau của 1 file sau khi file thay đổi và đc add

working directory : thư mục làm việc
staging area :nơi thư mục sau khi được add
git repo :nơi thư mục sau khi commit

git checkout -- <tênfile> = git store <tênfile>: xoá thay đổi của file
git reset HEAD -- <tênfile> : đưa file từ staging area về working directory

git checkout -b <tên nhánh>:tạo 1 nhánh mới
git checkout <tên nhánh>: chuyển sang nhánh
git branch : kiểm tra đang ở nhánh nào
git merge <tên nhánh>: merge nhánh vào nhánh đang ở hiện tại
git branch -D <tên nhánh>: xoá nhánh

git reset --soft <id commit>: các file đc commit sau commit kia sẽ về staging area
git reset --mixed <id commit>: các file đc commit sau commit kia sẽ về working directory
git reset --hard <id commit>: các file đc commit sau commit kia sẽ mất hẳn