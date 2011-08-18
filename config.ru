use Rack::Static, :urls => ["/stylesheets", "/images", "/javascripts", "/fonts"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=31556926' }, File.open('public/timer.html', File::RDONLY)] }


