<script>
    import profile_photo from '$lib/images/sample-photo.jpg';
</script>

<div class="circle-photo">
    <img width="100%" height="100%" alt="photo_profile" src="{profile_photo}" />
</div>

<style>
.circle-photo {
   width: 230px;
   height: 230px;
   border-radius: 50%;
   overflow: hidden;
}
.circle-photo img{
   object-fit: cover;
}

</style>
