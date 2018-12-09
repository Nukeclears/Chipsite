{{--
  Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.jumbotron')
    @include('partials.content-page')
    @include('partials.content-between')
  @endwhile
@endsection
